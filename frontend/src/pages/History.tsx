import React from "react";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router";

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
            <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              <div className="flex items-end justify-start gap-4 p-4 bg-cuswhite rounded-lg shadow-[2px_2px_8px_-3px_rgba(0,0,0,0.3)]">
                <div className="w-15 h-15 rounded-md bg-cusblack"></div>
                <div className="flex flex-col items-start justify-end ">
                  <p className="text-bd-m md:text-bd text-cusblack font-semibold">
                    <span>59 %</span>Terdeteksi AI
                  </p>
                  <p className="text-capt-m md:text-capt text-cusdarkgrey">
                    29 Maret 2026
                  </p>
                </div>
              </div>
              <div className="flex items-end justify-start gap-4 p-4 bg-cuswhite rounded-lg shadow-[2px_2px_8px_-3px_rgba(0,0,0,0.3)]">
                <div className="w-15 h-15 rounded-md bg-cusblack"></div>
                <div className="flex flex-col items-start justify-end ">
                  <p className="text-bd-m md:text-bd text-cusblack font-semibold">
                    <span>59 %</span>Terdeteksi AI
                  </p>
                  <p className="text-capt-m md:text-capt text-cusdarkgrey">
                    29 Maret 2026
                  </p>
                </div>
              </div>
              <div className="flex items-end justify-start gap-4 p-4 bg-cuswhite rounded-lg shadow-[2px_2px_8px_-3px_rgba(0,0,0,0.3)]">
                <div className="w-15 h-15 rounded-md bg-cusblack"></div>
                <div className="flex flex-col items-start justify-end ">
                  <p className="text-bd-m md:text-bd text-cusblack font-semibold">
                    <span>59 %</span>Terdeteksi AI
                  </p>
                  <p className="text-capt-m md:text-capt text-cusdarkgrey">
                    29 Maret 2026
                  </p>
                </div>
              </div>
              <div className="flex items-end justify-start gap-4 p-4 bg-cuswhite rounded-lg shadow-[2px_2px_8px_-3px_rgba(0,0,0,0.3)]">
                <div className="w-15 h-15 rounded-md bg-cusblack"></div>
                <div className="flex flex-col items-start justify-end ">
                  <p className="text-bd-m md:text-bd text-cusblack font-semibold">
                    <span>59 %</span>Terdeteksi AI
                  </p>
                  <p className="text-capt-m md:text-capt text-cusdarkgrey">
                    29 Maret 2026
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

  return <Navigate to="/login" replace />;
};

export default History;
