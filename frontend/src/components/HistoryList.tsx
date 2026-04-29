import React from "react";
import HistoryItem from "./HistoryItem";
import type { AnalysisRecordSchema } from "../schemas/entities/AnalysisRecord";

type Props = {
  analysisRecord: AnalysisRecordSchema[];
};

const HistoryList = ({ analysisRecord }: Props) => {
  return (
    <>
      {analysisRecord.map((r) => {
        return (
          <HistoryItem
            key={r.userId}
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
