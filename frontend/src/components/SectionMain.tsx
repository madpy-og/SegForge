import React from "react";
import type { UploadSchema } from "../schemas/input/UploadSchema";
import type { UseFormReturn } from "react-hook-form";
import Badge from "./Badge";
import FormAnalysis from "./FormAnalysis";

type Props = {
  form: UseFormReturn<UploadSchema>;
  handleSubmit: (value: UploadSchema) => Promise<void>;
};

const SectionMain = ({ form, handleSubmit }: Props) => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 md:gap-6 px-4">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
        <div className="w-50">
          <Badge value="100% Gratis dan Otomatis" variant="secondary" />
        </div>
        <h1 className="text-center text-[36px] md:text-[70px] leading-10 md:leading-18 text-cusblack font-bold">
          Deteksi Gambar AI
          <br />
          dalam Sekejap
        </h1>
        <p className="text-center text-bd-m md:text-bd text-cuslightblack">
          Unggah gambar dan dapatkan hasil analisis dalam hitungan detik
        </p>
      </div>
      <div className="w-full md:w-170 lg:w-220 h-80 md:h-100 flex flex-col items-center justify-center gap-4 mt-5 bg-cuswhite rounded-2xl shadow-[0px_0px_20px_-12px_rgba(0,0,0,0.3)]">
        <FormAnalysis form={form} handleSubmit={handleSubmit} />
      </div>
    </section>
  );
};

export default SectionMain;
