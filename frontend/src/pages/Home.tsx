import React from "react";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadSchema, type UploadSchema } from "../schemas/input/UploadSchema";
import MainSection from "../components/sections/MainSection";
import HowSection from "../components/sections/HowSection";
import { useNavigate } from "react-router";
import { AlertTriangle } from "lucide-react";

type Props = {
  isAuthenticated: boolean;
};

const Home = ({ isAuthenticated }: Props) => {
  const form = useForm<UploadSchema>({
    resolver: zodResolver(uploadSchema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  const handleSubmit = async (value: UploadSchema) => {
    navigate("/analysis-result", { state: { imageFile: value.image } });
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
