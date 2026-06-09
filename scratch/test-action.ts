// Load dotenv FIRST before any other imports so that process.env is populated
require('dotenv').config({ path: '.env.local' });

// Now import the action
const { submitInquiry } = require('../src/actions/contactAction');

async function testAction() {
  console.log("Calling submitInquiry server action...");
  try {
    const result = await submitInquiry({
      fullName: "Diagnostic Test",
      email: "test@example.com",
      phone: "9999999999",
      subject: "Diagnostic Subject",
      message: "This is a test submission from the diagnostic script.",
      source: "diagnostic_script"
    });
    console.log("Action result:", result);
  } catch (err) {
    console.error("Action threw error:", err);
  }
}

testAction();
