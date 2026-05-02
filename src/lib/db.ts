import { Pool, types } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

// Ensure BigInt is handled correctly for JSON serialization
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const prismaClientSingleton = () => {
  const connectionString = process.env.DATABASE_URL;
  
  if (!connectionString || connectionString.includes("username:password")) {
    console.warn("DATABASE_URL is not configured correctly.");
  }

  // Ensure PgBouncer is used for Supabase pooler
  let url = connectionString || "";
  if (url.includes("pooler.supabase.com") && !url.includes("pgbouncer=true")) {
    url += (url.includes("?") ? "&" : "?") + "pgbouncer=true";
  }

  try {
    const pool = new Pool({ 
      connectionString: url,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
      ssl: url.includes("supabase.com") ? { rejectUnauthorized: false } : undefined
    });
    
    const adapter = new PrismaPg(pool);
    return new PrismaClient({ 
      adapter,
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error']
    });
  } catch (error) {
    console.error("CRITICAL: Failed to initialize Prisma Client:", error);
    // Return a dummy client to prevent complete crash, but it will throw on use
    return new PrismaClient(); 
  }
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

// Lazy initialization - only create the client when first accessed at runtime
let _db: ReturnType<typeof prismaClientSingleton> | undefined;

function getDb() {
  if (_db === undefined) {
    _db = globalThis.prisma ?? prismaClientSingleton();
    if (process.env.NODE_ENV !== "production" && _db) {
      globalThis.prisma = _db;
    }
  }
  return _db;
}

// Ensure the db object proxies all calls to the actual client
const db = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getDb();
    if (!client) {
      throw new Error("Database client could not be initialized.");
    }
    return (client as any)[prop];
  },
});

export default db;

