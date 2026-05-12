import React from "react";
import type { AnalysisRecordSchema } from "../schemas/entities/AnalysisRecord";

type Props = {
  result: AnalysisRecordSchema | null;
};

const AnalysisBar = ({ result }: Props) => {
  return (
    <div className="mb-6 md:mb-6 shrink-0">
      <div className="flex justify-between items-end mb-3">
        <span className="font-semibold text-cusblack text-bd-m md:text-bd">
          Probabilitas AI
        </span>
        <span className="font-bold text-h4-m md:text-h4 text-cusblack leading-none">
          {result.analysisResult.aiProbability}%
        </span>
      </div>
      <div className="w-full h-2.5 bg-cusmedgrey rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${
            result.analysisResult.aiProbability > 70
              ? "bg-danger"
              : result.analysisResult.aiProbability > 40
                ? "bg-caution"
                : "bg-success"
          }`}
          style={{ width: `${result.analysisResult.aiProbability}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AnalysisBar;
