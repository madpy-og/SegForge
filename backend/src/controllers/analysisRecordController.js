import AnalysisRecord from "../models/AnalysisRecord.js";

export const getAnalysisRecord = async (req, res) => {
  try {
    const userId = req.user._id;

    const analysisRecord = await AnalysisRecord.find({ userId }).sort({
      createdAt: -1,
    });

    res
      .status(200)
      .json({ analysisRecord, message: "Fetching analysis record successful" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

export const getAnalysisRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const analysisRecord = await AnalysisRecord.findOne({
      _id: id,
      userId,
    });

    if (!analysisRecord) {
      return res.status(404).json({ message: "Analysis record not found" });
    }

    res
      .status(200)
      .json({ analysisRecord, message: "Fetching analysis record successful" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

export const addAnalysisRecord = async (req, res) => {
  try {
    const { userId, imageUrl, imageSize, analysisResult, processingDuration } =
      req.record;

    const newRecord = await AnalysisRecord.create({
      userId,
      imageUrl,
      imageSize,
      analysisResult,
      processingDuration,
    });

    res
      .status(201)
      .json({ newRecord, message: "Analysis record created succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteAnalysisRecord = async (req, res) => {
  try {
    await AnalysisRecord.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Analysis record deleted succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
