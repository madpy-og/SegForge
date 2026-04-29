import express from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import {
  getAnalysisRecord,
  deleteAnalysisRecord,
} from "../controllers/analysisRecordController.js";

const router = express.Router();

router.get("/", verifyToken, getAnalysisRecord);
router.delete("/", verifyToken, deleteAnalysisRecord);

export default router;
