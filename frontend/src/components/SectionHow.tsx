import React from "react";
import Card from "./Card";
import { Image, Search, Timer } from "lucide-react";

const SectionHow = () => {
  return (
    <section className="w-full pt-10 md:pt-30 pb-15 md:pb-40 mt-15 md:mt-40 flex flex-col items-center justify-center gap-7 md:gap-5 bg-cusmedgrey">
      <h1 className="text-center text-[32px] md:text-[60px] leading-10 md:leading-20 text-cusblack font-bold">
        Bagaimana Sistem Bekerja
      </h1>
      <div className="w-full px-4 md:px-18 lg:px-24 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="min-h-[150px] md:min-h-[200px] flex flex-col p-6 items-start justify-between gap-6 bg-cusblack text-cuswhite rounded-lg shadow-[2px_2px_8px_-3px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <Search className="shrink-0 w-5 h-5 md:w-6 md:h-6" />
          <div className="flex flex-col items-start justify-between gap-1">
            <h5 className="text-h5-m md:text-h5 font-bold">
              Analisis Visual Cerdas
            </h5>
            <p className="text-bs-m md:text-bs">
              Menganalisis pola visual, tekstur permukaan, serta detail-detail
              kecil pada gambar secara mendalam untuk mendeteksi adanya
              tanda-tanda gambar yang dihasilkan oleh kecerdasan buatan.
            </p>
          </div>
        </div>
        <div className="min-h-[150px] md:min-h-[200px] flex flex-col p-6 items-start justify-between gap-6 bg-cuswhite text-cusblack rounded-lg shadow-[2px_2px_8px_-3px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <Image className="shrink-0 w-5 h-5 md:w-6 md:h-6" />
          <div className="flex flex-col items-start justify-between gap-1">
            <h5 className="text-h5-m md:text-h5 font-bold">
              Deteksi Gambar AI
            </h5>
            <p className="text-bs-m md:text-bs">
              Mengidentifikasi gambar dengan akurat apakah suatu gambar
              merupakan hasil generate dari AI atau telah mengalami proses
              manipulasi digital menggunakan berbagai teknik pengolahan gambar.
            </p>
          </div>
        </div>
        <div className="min-h-[150px] md:min-h-[200px] flex flex-col p-6 items-start justify-between gap-6 bg-cusblack text-cuswhite rounded-lg shadow-[2px_2px_8px_-3px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <Timer className="shrink-0 w-5 h-5 md:w-6 md:h-6" />
          <div className="flex flex-col items-start justify-between gap-1">
            <h5 className="text-h5-m md:text-h5 font-bold">
              Hasil dalam Sekejap
            </h5>
            <p className="text-bs-m md:text-bs">
              Pengguna akan mendapatkan hasil analisis secara lengkap yang
              mencakup tingkat keaslian gambar dalam bentuk persentase yang
              dihitung secara otomatis hanya dalam hitungan detik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHow;
