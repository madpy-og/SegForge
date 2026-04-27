import React from "react";
import type { UploadSchema } from "../../schemas/input/UploadSchema";
import type { UseFormReturn } from "react-hook-form";
import AnalysisForm from "../form/AnalysisForm";
import Badge from "../Badge";

type Props = {
  form: UseFormReturn<UploadSchema>;
  handleSubmit: (value: UploadSchema) => Promise<void>;
};

const MainSection = ({ form, handleSubmit }: Props) => {
  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="w-50">
          <Badge value="100% Gratis dan Otomatis" variant="secondary" />
        </div>
        <h1 className="text-center text-[60px] md:text-[70px] leading-18 text-cusblack font-bold">
          Deteksi Gambar AI
          <br />
          dalam Sekejap
        </h1>
        <p className="text-bd-m md:text-bd text-cuslightblack">
          Unggah gambar dan dapatkan hasil analisis dalam hitungan detik
        </p>
      </div>
      <div className="w-220 h-100 flex flex-col items-center justify-center gap-4 mt-5 bg-cuswhite rounded-2xl shadow-[0px_0px_20px_-12px_rgba(0,0,0,0.3)]">
        <AnalysisForm form={form} handleSubmit={handleSubmit} />
      </div>
    </section>
  );
};

export default MainSection;
