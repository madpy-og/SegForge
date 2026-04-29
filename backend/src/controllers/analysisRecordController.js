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

export const deleteAnalysisRecord = async (req, res) => {
  try {
    await AnalysisRecord.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Analysis record deleted succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
