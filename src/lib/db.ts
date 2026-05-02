import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  const connectionString = process.env.DATABASE_URL;
  
  if (!connectionString || connectionString.includes("username:password")) {
    console.warn("DATABASE_URL is not configured correctly. Using default placeholder.");
  }

  // Ensure PgBouncer is used for Supabase pooler
  let url = connectionString || "";
  if (url.includes("pooler.supabase.com") && !url.includes("pgbouncer=true")) {
    url += (url.includes("?") ? "&" : "?") + "pgbouncer=true";
  }

  try {
    const pool = new Pool({ connectionString: url });
    const adapter = new PrismaPg(pool);
    return new PrismaClient({ adapter });
  } catch (error) {
    console.error("Failed to initialize Prisma Client:", error);
    // Returning a fallback client that will likely fail if used, but prevents crashing at import time
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

