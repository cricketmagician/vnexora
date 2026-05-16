
const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' });

async function testConn() {
  const url = process.env.DATABASE_URL;
  console.log("Testing connection to:", url.split('@')[1]);
  
  const pool = new Pool({ 
    connectionString: url,
    ssl: { rejectUnauthorized: false }
  });

  try {
    const res = await pool.query('SELECT NOW()');
    console.log("Success:", res.rows[0]);
  } catch (err) {
    console.error("Error code:", err.code);
    console.error("Error message:", err.message);
  } finally {
    await pool.end();
  }
}

testConn();
