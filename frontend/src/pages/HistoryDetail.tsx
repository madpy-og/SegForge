import React from "react";
import AnalysisDetail from "../components/AnalysisDetail";
import useAnalysisRecordDetail from "../hooks/useAnalysisRecordDetail";
import Navbar from "../components/Navbar";

type Props = {
  isAuthenticated: boolean;
};

const HistoryDetail = ({ isAuthenticated }: Props) => {
  const { record, refetchAnalysisRecordDataById } = useAnalysisRecordDetail();

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <main className="h-screen w-full flex items-center justify-center px-4 md:px-10 lg:px-20 overflow-hidden bg-cusgrey">
        <AnalysisDetail result={record} />
      </main>
    </>
  );
};

export default HistoryDetail;
