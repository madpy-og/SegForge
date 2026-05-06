const AnalysisSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="skeleton-shimmer h-40 w-40 rounded-md"></div>
      <p className="text-bd-m md:text-bd text-cuslightblack">
        Sedang menganalisis gambar...
      </p>
    </div>
  );
};

export default AnalysisSpinner;
