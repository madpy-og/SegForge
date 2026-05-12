import React from "react";
import type { AnalysisRecordSchema } from "../schemas/entities/AnalysisRecord";

type Props = {
  result: AnalysisRecordSchema | null;
};

const AnalysisIndicators = ({ result }) => {
  return (
    <div className="flex-1">
      <span className="font-semibold text-cusblack text-bd-m md:text-bd mb-2 block">
        Indikator Penemuan:
      </span>
      <ul className="space-y-2 pb-4">
        {result.analysisResult.indicators.map((indicator, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-cusblack shrink-0"></div>
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
  );
};

export default AnalysisIndicators;
