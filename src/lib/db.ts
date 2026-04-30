import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";
import { createPool } from "mariadb";

const prismaClientSingleton = () => {
  const connectionString = process.env.DATABASE_URL;
  
  if (!connectionString || connectionString.includes("username:password")) {
    // Return a dummy client or throw if strictly required. 
    // During build/dev without DB, this avoids crashes.
    console.warn("DATABASE_URL is not configured correctly. Prisma client will fail on execution.");
    return new PrismaClient();
  }

  try {
    const url = new URL(connectionString);
    const pool = createPool({
      host: url.hostname,
      port: parseInt(url.port) || 3306,
      user: url.username,
      password: url.password,
      database: url.pathname.substring(1),
      connectionLimit: 10,
    });

    const adapter = new PrismaMariaDb(pool);
    return new PrismaClient({ adapter });
  } catch (error) {
    console.error("Failed to initialize Prisma with MariaDB adapter:", error);
    return new PrismaClient();
  }
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const db = globalThis.prisma ?? prismaClientSingleton();

export default db;

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
