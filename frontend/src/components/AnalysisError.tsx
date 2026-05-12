import React from "react";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router";

type Props = {
  errorMsg: string;
};

export const AnalysisClientError = ({ errorMsg }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-[70px] max-w-110 mx-auto flex flex-col items-center justify-center gap-3 py-10 bg-cuswhite rounded-2xl shadow-[0px_0px_20px_-12px_rgba(0,0,0,0.3)]">
      <AlertTriangle strokeWidth={2} className="w-7 md:w-10 h-7 md:h-10 text-danger" />
      <h2 className="text-bd-m md:text-bd font-bold text-danger leading-2">Terjadi kesalahan!</h2>
      <p className="text-center text-bs-m md:text-bs text-danger ">{errorMsg}</p>
      <button
        onClick={() => navigate("/")}
        className="primary-button text-bs-m md:text-bs py-2 px-4 rounded-md"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};

export const AnalysisServerError = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-[70px] max-w-110 mx-auto flex flex-col items-center justify-center gap-3 py-10 bg-cuswhite rounded-2xl shadow-[0px_0px_20px_-12px_rgba(0,0,0,0.3)]">
      <AlertTriangle strokeWidth={2} className="w-7 md:w-10 h-7 md:h-10 text-danger" />
      <h2 className="text-bd-m md:text-bd font-bold text-danger leading-2">Terjadi kesalahan!</h2>
      <p className="text-center text-bs-m md:text-bs text-danger ">Gagal menganalisis gambar, silahkan coba kembali nanti</p>
      <button
        onClick={() => navigate("/")}
        className="primary-button text-bs-m md:text-bs py-2 px-4 rounded-md"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};
