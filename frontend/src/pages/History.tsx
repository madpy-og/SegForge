import React from "react";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router";
import { type AnalysisRecordSchema } from "../schemas/entities/AnalysisRecord";
import HistoryList from "../components/HistoryList";

type Props = {
  isAuthenticated: boolean;
};

const History = ({ isAuthenticated }: Props) => {
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
            <HistoryList analysisRecord={} />
          </section>
        </main>
      </>
    );
  }

  return <Navigate to="/login" replace />;
};

export default History;
