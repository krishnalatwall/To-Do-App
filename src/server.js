import dotenv from 'dotenv';
import { connectDb } from "./config/connectDB.js";
import app from './app.js';
import express from "express";

dotenv.config();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// ✅ Connect to DB first, then start server
connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✈️ Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1); // Optional: stop the app if DB fails
  });
