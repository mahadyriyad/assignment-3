const express = require("express");
const app = express();
const blogRoutes = require("./routes/blogRoutes");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

app.use(express.json());

// Routes
app.use("/api", blogRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
