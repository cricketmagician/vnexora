const { PrismaClient } = require('@prisma/client');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');

async function testConnection() {
  let connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("DATABASE_URL is missing.");
    return;
  }

  // Ensure protocol is mariadb:// for the adapter
  connectionString = connectionString.replace("mysql://", "mariadb://");
  
  const adapter = new PrismaMariaDb(connectionString);
  const prisma = new PrismaClient({ adapter });

  try {
    console.log("Attempting to connect with MariaDB adapter...");
    const submission = await prisma.submission.create({
      data: {
        fullName: "Adapter Diagnostic Test",
        email: "adapter@vnexora.com",
        phone: "9876543210",
        subject: "MariaDB Adapter Verification",
        message: "Verifying if the MariaDB adapter is correctly persisting data to Hostinger.",
        source: "adapter_test_script"
      }
    });
    console.log("SUCCESS: Created test submission:", submission.id);
  } catch (error) {
    console.error("FAILURE: Could not persist to database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
