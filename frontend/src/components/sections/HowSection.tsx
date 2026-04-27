import React from "react";
import Card from "../Card";
import { Scroll } from "lucide-react";

const HowSection = () => {
  return (
    <section className="w-full h-200 mt-20 flex flex-col items-center justify-center gap-5 bg-cusdarkgrey/10">
      <h1 className="text-center text-[40px] md:text-[50px] text-cusblack font-bold">
        Bagaimana Sistem Bekerja
      </h1>
      <div className="w-full px-16 grid grid-cols-3 gap-10">
        <Card className="flex flex-col p-10 items-start justify-around bg-cusblack text-cuswhite ">
          <Scroll />
          <h6 className="text-bl-m md:text-bl font-semibold">
            Analisis Visual Cerdas
          </h6>
          <p className="text-bs-m md:text-bs ">
            Sistem menganalisis pola, tekstur, dan detail visual untuk
            mendeteksi tanda tanda gambar buatan AI
          </p>
        </Card>
        <Card className="flex flex-col p-10 items-start justify-around bg-cuswhite text-cuslightblack">
          <Scroll />
          <h6 className="text-bl-m md:text-bl font-semibold">
            Deteksi Gambar AI
          </h6>
          <p className="text-bs-m md:text-bs ">
            Mengidentifikasi apakah gambar merupakan hasil generate AI atau
            telah dimanipulasi secara digital
          </p>
        </Card>
        <Card className="flex flex-col p-10 items-start justify-around gap-5 bg-cusblack text-cuswhite">
          <Scroll />
          <h6 className="text-bl-m md:text-bl font-semibold">
            Hasil dalam Sekejap
          </h6>
          <p className="text-bs-m md:text-bs ">
            Dapatkan hasil analisis lengkap dengan persentasi tingkat keaslian
            dalam hitungan detik
          </p>
        </Card>
      </div>
    </section>
  );
};

export default HowSection;
