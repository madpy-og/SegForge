export const validateAddAnalysisRecord = async (req, res, next) => {
  try {
    const { userId, imageUrl, imageSize, analysisResult, processingDuration } =
      req.body;

    if (
      !userId ||
      !imageUrl ||
      !imageSize ||
      !analysisResult ||
      !processingDuration
    ) {
      return res.status(401).json({ message: "Body request is not valid" });
    }

    req.record = {
      userId,
      imageUrl,
      imageSize,
      analysisResult,
      processingDuration,
    };

    next();
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};
