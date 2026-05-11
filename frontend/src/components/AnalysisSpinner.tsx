import { ScanSearch } from "lucide-react";

const AnalysisSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full py-8">
      {/* Container utama dengan efek shimmer dan scanner */}
      <div className="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-xl border border-cusdarkgrey/20 bg-cusmedgrey/30 shadow-sm">
        {/* Shimmer Base */}
        <div className="skeleton-shimmer absolute inset-0"></div>

        {/* Garis Scanner yang bergerak */}
        <div className="absolute left-0 top-0 h-[2px] w-full animate-[bounce_2s_infinite] bg-cuslightblack/30 shadow-[0_4px_15px_3px_rgba(95,94,94,0.2)]"></div>

        {/* Icon di tengah */}
        <ScanSearch className="z-10 h-14 w-14 text-cusdarkgrey animate-pulse" />
      </div>

      {/* Teks dan indikator proses */}
      <div className="flex flex-col items-center gap-4">
        <p className="text-bd-m md:text-bd font-medium text-cuslightblack animate-pulse">
          Sedang menganalisis gambar...
        </p>
      </div>
    </div>
  );
};

export default AnalysisSpinner;
