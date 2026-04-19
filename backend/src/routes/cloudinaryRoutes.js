import express from "express";
import { getSignature } from "../controllers/cloudinaryController";
import { verifyTokenOptional } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", verifyTokenOptional, getSignature);

export default router;
