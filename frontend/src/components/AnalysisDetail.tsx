import React from "react";
import type { AnalysisRecordSchema } from "../schemas/entities/AnalysisRecord";
import { Calendar } from "lucide-react";
import { formatDate } from "../utils/FormatDate";
import AnalysisLabel from "./AnalysisLabel";
import AnalysisBar from "./AnalysisBar";
import AnalysisIndicators from "./AnalysisIndicators";

type Props = {
  result: AnalysisRecordSchema | null;
};

const AnalysisDetail = ({ result }: Props) => {
  return (
    <div className="w-full mt-[70px] max-w-5xl h-160 md:h-120 max-h-[100vh] md:max-h-[600px] bg-cuswhite rounded-lg shadow-[0px_0px_20px_-12px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row">
      <div className="w-full h-[45%] md:h-full md:w-1/2 bg-cusmedgrey flex items-center justify-center p-6 md:p-10 shrink-0 relative">
        <img
          src={result.imageUrl}
          alt="Analyzed"
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>
      <div className="w-full h-[60%] md:h-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
        <div className="flex items-center justify-between mb-6 shrink-0">
          <span className="text-bs-m md:text-bs font-bold text-cusblack uppercase tracking-widest">
            Hasil Analisis
          </span>
          <div className="flex items-center text-cuslightblack text-bs-m md:text-bs gap-2">
            <Calendar size={16} />
            <span>{formatDate(result.createdAt)}</span>
          </div>
        </div>
        <AnalysisLabel result={result} />
        <AnalysisBar result={result} />
        <AnalysisIndicators result={result} />
      </div>
    </div>
  );
};

export default AnalysisDetail;
