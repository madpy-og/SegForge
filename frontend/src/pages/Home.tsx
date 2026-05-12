import React from "react";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadSchema, type UploadSchema } from "../schemas/input/UploadSchema";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import SectionMain from "../components/SectionMain";
import SectionHow from "../components/SectionHow";
import { Loader2 } from "lucide-react";
import Badge from "../components/Badge";

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
        <SectionMain form={form} handleSubmit={handleSubmit} />
        <SectionHow />
      </main>
      <Footer />
    </>
  );
};

export default Home;
