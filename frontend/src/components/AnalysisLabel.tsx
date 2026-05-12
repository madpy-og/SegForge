import React from "react";
import { AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";
import type { AnalysisRecordSchema } from "../schemas/entities/AnalysisRecord";

type Props = {
  result: AnalysisRecordSchema | null;
};

const AnalysisLabel = ({ result }: Props) => {
  return (
    <div className="mb-6 md:mb-6 shrink-0">
      {result.analysisResult.label === "Human" && (
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-success/10 text-success rounded-full font-bold text-bd-m md:text-bd">
          <CheckCircle2 size={24} />
          <span>Gambar Asli (Manusia)</span>
        </div>
      )}
      {result.analysisResult.label === "AI" && (
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-danger/10 text-danger rounded-full font-bold text-bd-m md:text-bd">
          <ShieldAlert size={24} />
          <span>Terdeteksi AI</span>
        </div>
      )}
      {result.analysisResult.label === "Uncertain" && (
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-caution/10 text-caution rounded-full font-bold text-bd-m md:text-bd">
          <AlertTriangle size={24} />
          <span>Sulit Dipastikan</span>
        </div>
      )}
    </div>
  );
};

export default AnalysisLabel;
