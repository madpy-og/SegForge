import express from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import {
  getAnalysisRecord,
  deleteAnalysisRecord,
  addAnalysisRecord,
} from "../controllers/analysisRecordController.js";
import { validateAddAnalysisRecord } from "../middlewares/analysisRecordMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getAnalysisRecord);
router.post("/", verifyToken, validateAddAnalysisRecord, addAnalysisRecord);
router.delete("/", verifyToken, deleteAnalysisRecord);

export default router;
