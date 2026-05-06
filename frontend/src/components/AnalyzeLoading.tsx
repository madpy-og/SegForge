const AnalyzeLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="skeleton-shimmer h-60 w-60 rounded-md"></div>
      <p className="text-bd-m md:text-bd text-cuslightblack">
        Sedang menganalisis gambar...
      </p>
    </div>
  );
};

export default AnalyzeLoading;
