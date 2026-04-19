import express from "express";
import { getSignature } from "../controllers/cloudinaryController.js";
import { verifyTokenOptional } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", verifyTokenOptional, getSignature);

export default router;
