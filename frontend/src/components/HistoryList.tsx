import React from "react";
import HistoryItem from "./HistoryItem";
import type { AnalysisRecordSchema } from "../schemas/entities/AnalysisRecord";

type Props = {
  analysisRecord: AnalysisRecordSchema[];
};

const HistoryList = ({ analysisRecord }: Props) => {
  if (!Array.isArray(analysisRecord)) {
    return null;
  }

  return (
    <>
      {analysisRecord.map((r) => {
        return (
          <HistoryItem
            key={r._id}
            imageUrl={r.imageUrl}
            aiProbability={r.analysisResult.aiProbability}
            createdAt={r.createdAt}
          />
        );
      })}
    </>
  );
};

export default HistoryList;
