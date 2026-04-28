import express from "express";
import { analyzeImage } from "../controllers/analyzeController.js";
import { verifyTokenOptional } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", verifyTokenOptional, analyzeImage);

export default router;
