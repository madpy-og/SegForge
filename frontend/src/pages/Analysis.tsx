import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router";
import { uploadToCloudinary } from "../api/cloudinaryApi";
import { analyze } from "../api/analyzeApi";
import { addAnalysisRecord } from "../api/analysisRecordApi";
import type { AnalysisRecordSchema } from "../schemas/entities/AnalysisRecord";
import AnalysisSpinner from "../components/AnalysisSpinner";
import AnalysisDetail from "../components/AnalysisDetail";
import {
  AnalysisClientError,
  AnalysisServerError,
} from "../components/AnalysisError";

type Props = {
  isAuthenticated: boolean;
};

const Analysis = ({ isAuthenticated }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<AnalysisRecordSchema | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const processAnalysis = async () => {
      if (location.state && location.state.imageFile) {
        setIsLoading(true);
        setErrorMsg(null);
        try {
          const file = location.state.imageFile;

          const uploadData = await uploadToCloudinary(
            { image: file } as any,
            "image",
          );

          if (!uploadData) {
            setErrorMsg(
              ">Gagal menganalisis gambar, silahkan coba kembali nanti",
            );
            setIsLoading(false);
            return;
          }

          const analyzeData = await analyze(uploadData.imageUrl);

          if (!analyzeData) {
            setErrorMsg(">Gagal menganalisis gambar, silahkan coba kembali nanti");
            setIsLoading(false);
            return;
          }

          if (isAuthenticated) {
            const addRecord = await addAnalysisRecord(analyzeData);
            if (!addRecord) {
              console.log("Failed to save analysis record");
            }
          }

          sessionStorage.setItem(
            "current-analysis",
            JSON.stringify(analyzeData),
          );
          setResult(analyzeData);

          window.history.replaceState({}, document.title);
        } catch (error: any) {
          console.error(error);
          setErrorMsg(
            error?.message || ">Gagal menganalisis gambar, silahkan coba kembali nanti",
          );
        } finally {
          setIsLoading(false);
        }
      } else {
        const sessionData = sessionStorage.getItem("current-analysis");
        if (sessionData) {
          setResult(JSON.parse(sessionData));
          setIsLoading(false);
        } else {
          navigate("/");
        }
      }
    };

    processAnalysis();
  }, [location.state, navigate, isAuthenticated]);

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <main className="h-screen w-full flex items-center justify-center px-4 md:px-10 lg:px-20 overflow-hidden bg-cusgrey">
        {isLoading ? (
          <AnalysisSpinner />
        ) : result ? (
          <AnalysisDetail result={result} />
        ) : errorMsg ? (
          <AnalysisClientError errorMsg={errorMsg} />
        ) : (
          <AnalysisServerError />
        )}
      </main>
    </>
  );
};

export default Analysis;
