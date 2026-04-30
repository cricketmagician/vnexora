import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  const connectionString = process.env.DATABASE_URL;
  
  if (!connectionString || connectionString.includes("username:password")) {
    console.warn("DATABASE_URL is not configured correctly.");
    return new PrismaClient();
  }

  try {
    const adapter = new PrismaMariaDb(connectionString);
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
