const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const taskRoutes = require("./routes/taskRoutes");
const app = express();

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

if (!MONGO_URI) {
  console.error("Missing MONGO_URI environment variable. Check backend/.env");
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("Project Management API Running");
});
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});