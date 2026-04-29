import React from "react";
import type { AnalysisRecordSchema } from "../schemas/entities/AnalysisRecord";

type Props = {
  analysisRecord: AnalysisRecordSchema;
};

const HistoryItem = ({ analysisRecord }: Props) => {
  return (
    <div className="flex items-end justify-start gap-4 p-4 bg-cuswhite rounded-lg shadow-[2px_2px_8px_-3px_rgba(0,0,0,0.3)]">
      <img
        src={analysisRecord.imageUrl}
        className="w-15 h-15 rounded-m object-fit"
      />
      <div className="flex flex-col items-start justify-end ">
        <p className="text-bd-m md:text-bd text-cusblack font-semibold">
          <span>{analysisRecord.analysisResult.aiProbability}%</span>Terdeteksi
          AI
        </p>
        <p className="text-capt-m md:text-capt text-cusdarkgrey">
          {analysisRecord.createdAt}
        </p>
      </div>
    </div>
  );
};

export default HistoryItem;
