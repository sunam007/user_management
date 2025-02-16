import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import { seedUsers } from "./utils/seeder.js";
import helmet from "helmet";
import cors from "cors";

const app = express();
app.use(express.json());

// MongoDB Connection URI
const LOCAL_URI = "mongodb://localhost:27017/user_management";

mongoose
  .connect(LOCAL_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

//Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/users", userRoutes);

//uncomment the seedUsers function if you want to seed the database with some users
// seedUsers();

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
