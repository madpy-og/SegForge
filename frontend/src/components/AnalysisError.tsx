import React from "react";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router";

type Props = {
  errorMsg: string;
};

export const AnalysisClientError = ({ errorMsg }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center p-10 bg-cuswhite rounded-2xl shadow-[0px_0px_20px_-12px_rgba(0,0,0,0.3)]">
      <AlertTriangle size={48} className="text-danger mb-4" />
      <h2 className="text-h6 font-bold text-cusblack mb-2">Peringatan</h2>
      <p className="text-center text-bd text-cuslightblack">{errorMsg}</p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 primary-button rounded-md font-medium"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};

export const AnalysisServerError = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center p-10 bg-cuswhite rounded-2xl shadow-[0px_0px_20px_-12px_rgba(0,0,0,0.3)]">
      <p className="text-center text-bd text-cuslightblack">
        Gagal memuat hasil analisis.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 outline-button rounded-md font-medium"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};
