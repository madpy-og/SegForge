import React from "react";
import Navbar from "../components/Navbar";
import { Link, Navigate } from "react-router";
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
            <div
              className={`${analysisRecord.length === 0 ? "p-35 flex justify-center items-center" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 "} w-full mt-5 `}
            >
              {Array.isArray(analysisRecord) && analysisRecord.length > 0 ? (
                <HistoryList analysisRecord={analysisRecord} />
              ) : Array.isArray(analysisRecord) &&
                analysisRecord.length === 0 ? (
                <div className="text-cuslightblack col-span-full flex flex-col items-center justify-center gap-2">
                  <p>Belum ada riwayat terbaru.</p>
                  <Link
                    to="/"
                    className="primary-button text-bs-m md:text-bs py-1 px-4 rounded-md "
                  >
                    Lakukan Analisis
                  </Link>
                </div>
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
