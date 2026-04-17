import express from "express";
import { analyzeImage } from "../controllers/analyzeController.js";

const router = express.Router();

router.post("/", analyzeImage);
