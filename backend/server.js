const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact"); // Import contact routes

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// Use routes
app.use("/api", contactRoutes); // Mount contact routes under /api

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
