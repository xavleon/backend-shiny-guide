const express = require("express");
const router = express.Router();

// POST route for contact form
router.post("/contact", (req, res) => {
  // Get form data from request body
  const { name, email, username, message } = req.body;

  // Log the received data (for demonstration)
  console.log("Form Data Received:", {
    name,
    username,
    email,
    message,
  });

  // Here you would typically:
  // 1. Validate the data
  // 2. Save to database
  // 3. Send email notification
  // etc.

  // Send response back to client
  res.json({
    message: "Form submission successful!",
    data: { name, email, username, message },
  });
});

module.exports = router;
