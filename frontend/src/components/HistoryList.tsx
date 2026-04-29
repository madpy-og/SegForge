import React from "react";
import HistoryItem from "./HistoryItem";
import type { AnalysisRecordSchema } from "../schemas/entities/AnalysisRecord";

type Props = {
  analysisRecord: AnalysisRecordSchema;
};

const HistoryList = ({ analysisRecord }: Props) => {
  return (
    <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <HistoryItem analysisRecord={analysisRecord} />
    </div>
  );
};

export default HistoryList;
