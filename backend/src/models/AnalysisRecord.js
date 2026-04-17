import mongoose from "mongoose";

const AnalysisRecordSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    imageUrl: { type: String, required: true },
    imageHash: { type: String, required: true },
    imageSize: { type: Number, required: true },
    imageDimensions: {
      width: { type: Number, required: true },
      height: { type: Number, required: true },
    },
    analysisResult: {
      aiProbability: { type: Number, required: true },
      label: {
        type: String,
        enum: ["AI", "Human", "Uncertain"],
        required: true,
      },
      confidence: {
        type: String,
        enum: ["low", "medium", "high"],
        required: true,
      },
      indicators: { type: [String], default: [] },
      model: { type: String, required: true },
    },
    processingDuration: { type: Number, required: true },
  },
  { timestamps: true },
);

export default mongoose.model("AnalysisRecord", AnalysisRecordSchema);
