import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import AnalysisForm from "../components/form/AnalysisForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadSchema, type UploadSchema } from "../schemas/input/UploadSchema";
import { uploadToCloudinary } from "../api/cloudinaryApi";
import { analyze } from "../api/analyzeApi";

type Props = {
  isAuthenticated: boolean;
};

const Home = ({ isAuthenticated }: Props) => {
  const form = useForm<UploadSchema>({
    resolver: zodResolver(uploadSchema),
  });

  const handleSubmit = async (value: UploadSchema) => {
    try {
      const uploadData = await uploadToCloudinary(value, "image");

      if (!uploadData) {
        console.log("Failed to upload image");
        return;
      }

      const analyzeData = await analyze(uploadData.imageUrl);

      if (!analyzeData) {
        console.log("Failed to analyze image");
        return;
      }
    } catch (error) {}
  };
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <main className="pt-30 pb-20">
        <section className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="w-50">
              <Badge value="100% Gratis dan Otomatis" variant="secondary" />
            </div>
            <h1 className="text-center text-h1-m md:text-[60px] leading-15 text-cusblack font-bold">
              Deteksi Gambar AI
              <br />
              dalam Sekejap
            </h1>
            <p className="text-bd-m md:text-bd text-cuslightblack">
              Unggah gambar dan dapatkan hasil analisis dalam hitungan detik
            </p>
          </div>
          <div className="w-220 h-100 flex flex-col items-center justify-center gap-4 bg-cuswhite rounded-md shadow-[2px_2px_4px_-3px_rgba(0,0,0,0.3)]">
            <AnalysisForm form={form} handleSubmit={handleSubmit} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
