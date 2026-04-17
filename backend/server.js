import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/analyze", analyzeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
