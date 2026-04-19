import AnalysisRecord from "../models/AnalysisRecord.js";
import { analyzeImageWithGemini } from "../services/analyzeService.js";
import { fetchImageAsBase64 } from "../utils/fetchImageAsBase64.js";

export const analyzeImage = async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ message: "Body request is empty" });
    }

    const data = await fetchImageAsBase64(imageUrl);

    const { imageBase64, imageSize, mimeType } = data;

    const analysisData = await analyzeImageWithGemini({
      imageUrl,
      imageBase64,
      imageSize,
      mimeType,
    });

    const record = await AnalysisRecord.create({
      userId: req.user?._id ?? null,
      ...analysisData,
    });

    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};
