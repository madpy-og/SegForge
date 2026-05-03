import React from "react";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadSchema, type UploadSchema } from "../schemas/input/UploadSchema";
import { uploadToCloudinary } from "../api/cloudinaryApi";
import { analyze } from "../api/analyzeApi";
import MainSection from "../components/sections/MainSection";
import HowSection from "../components/sections/HowSection";
import { addAnalysisRecord } from "../api/analysisRecordApi";
import { useNavigate } from "react-router";

type Props = {
  isAuthenticated: boolean;
};

const Home = ({ isAuthenticated }: Props) => {
  const form = useForm<UploadSchema>({
    resolver: zodResolver(uploadSchema),
  });

  const navigate = useNavigate();

  const handleSubmit = async (value: UploadSchema) => {
    try {
      navigate("/analysis-result");

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

      if (isAuthenticated === true) {
        const addRecord = await addAnalysisRecord(analyzeData);

        if (!addRecord) {
          console.log("Failed to save analysis record");
          return;
        }
      }

      sessionStorage.setItem("current-analysis", JSON.stringify(analyzeData));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <main className="pt-25 md:pt-30 grid grid-cols-1">
        <MainSection form={form} handleSubmit={handleSubmit} />
        <HowSection />
      </main>
    </>
  );
};

export default Home;
