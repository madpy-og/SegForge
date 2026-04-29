import React from "react";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router";
import HistoryList from "../components/HistoryList";
import { useAnalysisRecord } from "../hooks/useAnalysisRecord";

type Props = {
  isAuthenticated: boolean;
};

const History = ({ isAuthenticated }: Props) => {
  const { analysisRecord, refetchAnalysisRecordData } = useAnalysisRecord();

  if (isAuthenticated === true) {
    return (
      <>
        <Navbar isAuthenticated={isAuthenticated} />
        <main className="pt-25 md:pt-30 grid grid-cols-1">
          <section className="w-full px-4 md:px-18 lg:px-24">
            <h2 className="text-h2-m md:text-h2 text-cusblack font-semibold">
              Riwayat Terbaru
            </h2>
            <p className="text-bd-m md:text-bd text-cuslightblack">
              Lihat riwayat hasil analisis gambar anda
            </p>
            <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {analysisRecord ? (
                <HistoryList analysisRecord={analysisRecord} />
              ) : null}
            </div>
          </section>
        </main>
      </>
    );
  }

  return <Navigate to="/login" replace />;
};

export default History;
