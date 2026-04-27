import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import AnalysisForm from "../components/form/AnalysisForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadSchema, type UploadSchema } from "../schemas/input/UploadSchema";
import { uploadToCloudinary } from "../api/cloudinaryApi";
import { analyze } from "../api/analyzeApi";
import MainSection from "../components/sections/MainSection";
import HowSection from "../components/sections/HowSection";

type Props = {
  isAuthenticated: boolean;
};

const Home = ({ isAuthenticated }: Props) => {
  const form = useForm<UploadSchema>({
    resolver: zodResolver(uploadSchema),
  });

  const handleSubmit = async (value: UploadSchema) => {
    console.log("SUBMIT MASUK", value);
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
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <main className="pt-30">
        <MainSection form={form} handleSubmit={handleSubmit} />
        <HowSection />
      </main>
    </>
  );
};

export default Home;
