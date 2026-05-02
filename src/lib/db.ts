import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  const connectionString = process.env.DATABASE_URL;
  
  if (!connectionString || connectionString.includes("username:password")) {
    console.warn("DATABASE_URL is not configured. Database operations will be skipped.");
    return null;
  }

  try {
    // Switching to Native Prisma Driver for better stability on Vercel
    return new PrismaClient();
  } catch (error) {
    console.error("Failed to initialize Prisma Client:", error);
    return null;
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

// Proxy that defers initialization until a property is actually accessed
const db = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getDb();
    if (!client) {
      // Return a no-op for missing DB so builds and pages without DB don't crash
      console.warn(`Database not available. Skipping db.${String(prop)}`);
      return new Proxy(() => {}, {
        get: () => async () => [],
        apply: () => Promise.resolve([]),
      });
    }
    return (client as any)[prop];
  },
});

export default db;
