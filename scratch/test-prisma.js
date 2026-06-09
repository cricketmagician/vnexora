const db = require('../src/lib/db').default;
require('dotenv').config({ path: '.env.local' });

async function testPrisma() {
  try {
    console.log("Attempting prisma insert...");
    const result = await db.submission.create({
      data: {
        fullName: "Test User",
        email: "test@example.com",
        phone: "1234567890",
        subject: "Test Subject",
        message: "Test message",
        source: "test_script"
      }
    });
    console.log("Success:", result);
  } catch (err) {
    console.error("Prisma error:", err);
  }
}

testPrisma();
