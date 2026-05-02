import { Pool } from 'pg';
import { config } from 'dotenv';
config({ path: '.env.local' });

const url = process.env.DATABASE_URL + (process.env.DATABASE_URL?.includes('?') ? '&' : '?') + 'pgbouncer=true';
console.log("Initializing database...");

async function main() {
  const pool = new Pool({ 
    connectionString: url,
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log("Running SQL to create table...");
    await pool.query(`
      CREATE TABLE IF NOT EXISTS "Submission" (
        "id" TEXT NOT NULL,
        "fullName" TEXT NOT NULL,
        "email" TEXT NOT NULL,
        "phone" TEXT,
        "subject" TEXT,
        "message" TEXT NOT NULL,
        "source" TEXT NOT NULL DEFAULT 'contact_form',
        "data" JSONB,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

        CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
      );
    `);
    console.log("Table 'Submission' created/verified successfully.");
  } catch (error) {
    console.error("SQL Error:", error);
  } finally {
    await pool.end();
  }
}

main();
