import React from "react";
import type { AnalysisRecordSchema } from "../schemas/entities/AnalysisRecord";
import {
  AlertTriangle,
  Calendar,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import { formatDate } from "../utils/FormatDate";

type Props = {
  result: AnalysisRecordSchema | null;
};

const AnalysisDetail = ({ result }: Props) => {
  return (
    <div className="w-full max-w-5xl h-120 max-h-[85vh] md:max-h-[600px] bg-cuswhite rounded-lg shadow-[0px_0px_20px_-12px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row">
      {/* Image Side */}
      <div className="w-full h-[40%] md:h-full md:w-1/2 bg-cusmedgrey flex items-center justify-center p-6 md:p-10 shrink-0 relative">
        <img
          src={result.imageUrl}
          alt="Analyzed"
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>

      {/* Content Side */}
      <div className="w-full h-[60%] md:h-full md:w-1/2 p-6 md:p-12 flex flex-col overflow-y-auto">
        <div className="flex items-center justify-between mb-6 shrink-0">
          <span className="text-capt md:text-bs font-bold text-cuslightblack uppercase tracking-widest">
            Hasil Analisis
          </span>
          <div className="flex items-center text-cuslightblack text-capt md:text-bs gap-2">
            <Calendar size={16} />
            <span>{formatDate(result.createdAt)}</span>
          </div>
        </div>

        {/* Label Badge */}
        <div className="mb-6 md:mb-8 shrink-0">
          {result.analysisResult.label === "Human" && (
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-success/10 text-success rounded-full font-bold text-bd md:text-bl">
              <CheckCircle2 size={24} />
              <span>Gambar Asli (Manusia)</span>
            </div>
          )}
          {result.analysisResult.label === "AI" && (
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-danger/10 text-danger rounded-full font-bold text-bd md:text-bl">
              <ShieldAlert size={24} />
              <span>Terdeteksi AI</span>
            </div>
          )}
          {result.analysisResult.label === "Uncertain" && (
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-caution/10 text-caution rounded-full font-bold text-bd md:text-bl">
              <AlertTriangle size={24} />
              <span>Sulit Dipastikan</span>
            </div>
          )}
        </div>

        {/* Probability Bar */}
        <div className="mb-6 md:mb-8 shrink-0">
          <div className="flex justify-between items-end mb-3">
            <span className="font-semibold text-cusblack text-bd md:text-bl">
              Probabilitas AI
            </span>
            <span className="font-bold text-h3 md:text-h2 text-cusblack leading-none">
              {result.analysisResult.aiProbability}%
            </span>
          </div>
          <div className="w-full h-3 bg-cusdarkgrey/30 rounded-full overflow-hidden">
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

        {/* Indicators */}
        <div className="flex-1">
          <span className="font-semibold text-cusblack text-bd md:text-bl mb-4 block">
            Indikator Penemuan:
          </span>
          <ul className="space-y-3 pb-4">
            {result.analysisResult.indicators.map((indicator, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-2 w-2 h-2 rounded-full bg-cusblack shrink-0"></div>
                <p className="text-bd-m md:text-bd text-cuslightblack leading-relaxed">
                  {indicator}
                </p>
              </li>
            ))}
            {result.analysisResult.indicators.length === 0 && (
              <p className="text-bd-m text-cuslightblack italic">
                Tidak ada indikator spesifik yang ditemukan.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalysisDetail;
