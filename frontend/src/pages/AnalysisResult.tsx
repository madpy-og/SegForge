import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router";
import { uploadToCloudinary } from "../api/cloudinaryApi";
import { analyze } from "../api/analyzeApi";
import { addAnalysisRecord } from "../api/analysisRecordApi";
import type { AnalysisRecordSchema } from "../schemas/entities/AnalysisRecord";
import { GridLoader } from "react-spinners";
import { CheckCircle2, AlertTriangle, ShieldAlert, Calendar } from "lucide-react";

type Props = {
  isAuthenticated: boolean;
};

const AnalysisResult = ({ isAuthenticated }: Props) => {
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

          const uploadData = await uploadToCloudinary({ image: file } as any, "image");

          if (!uploadData) {
            setErrorMsg("Gagal mengunggah gambar. Silakan periksa koneksi atau konfigurasi Cloudinary Anda.");
            setIsLoading(false);
            return;
          }

          const analyzeData = await analyze(uploadData.imageUrl);

          if (!analyzeData) {
            setErrorMsg("Gagal menganalisis gambar. Silakan coba lagi nanti.");
            setIsLoading(false);
            return;
          }

          if (isAuthenticated) {
            const addRecord = await addAnalysisRecord(analyzeData);
            if (!addRecord) {
              console.log("Failed to save analysis record");
            }
          }

          sessionStorage.setItem("current-analysis", JSON.stringify(analyzeData));
          setResult(analyzeData);

          window.history.replaceState({}, document.title);
        } catch (error: any) {
          console.error(error);
          setErrorMsg(error?.message || "Terjadi kesalahan yang tidak terduga.");
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
      <main className="h-screen w-full pt-[70px] flex items-center justify-center px-4 md:px-10 lg:px-20 overflow-hidden bg-cusgrey">
        
        {isLoading ? (
          <div className="w-full max-w-5xl h-full max-h-[85vh] md:max-h-[600px] bg-cuswhite rounded-2xl shadow-[0px_0px_20px_-12px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row">
            {/* Image Skeleton */}
            <div className="w-full h-[40%] md:h-full md:w-1/2 bg-cusdarkgrey/10 flex flex-col items-center justify-center p-10 relative shrink-0">
              <div className="absolute inset-0 bg-cusblack/5 animate-pulse"></div>
              <GridLoader color="#1f1f21" size={15} />
              <p className="mt-8 text-cusblack font-semibold tracking-wide animate-pulse">Memproses Gambar...</p>
            </div>
            
            {/* Content Skeleton */}
            <div className="w-full h-[60%] md:h-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center gap-6 overflow-hidden">
              <div className="w-32 h-6 bg-cusdarkgrey/20 rounded-md animate-pulse mb-4 shrink-0"></div>
              <div className="w-full h-12 bg-cusdarkgrey/20 rounded-full animate-pulse mb-2 shrink-0"></div>
              <div className="w-full h-14 bg-cusdarkgrey/20 rounded-md animate-pulse shrink-0"></div>
              <div className="space-y-4 mt-4 w-full">
                <div className="w-3/4 h-4 bg-cusdarkgrey/20 rounded-md animate-pulse"></div>
                <div className="w-full h-4 bg-cusdarkgrey/20 rounded-md animate-pulse"></div>
                <div className="w-5/6 h-4 bg-cusdarkgrey/20 rounded-md animate-pulse"></div>
              </div>
            </div>
          </div>
        ) : result ? (
          <div className="w-full max-w-5xl h-full max-h-[85vh] md:max-h-[600px] bg-cuswhite rounded-2xl shadow-[0px_0px_20px_-12px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row">
            
            {/* Image Side */}
            <div className="w-full h-[40%] md:h-full md:w-1/2 bg-cusdarkgrey/10 flex items-center justify-center p-6 md:p-10 shrink-0 relative">
              <img 
                src={result.imageUrl} 
                alt="Analyzed" 
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            {/* Content Side */}
            <div className="w-full h-[60%] md:h-full md:w-1/2 p-6 md:p-12 flex flex-col overflow-y-auto">
              
              <div className="flex items-center justify-between mb-6 shrink-0">
                <span className="text-capt md:text-bs font-bold text-cuslightblack uppercase tracking-widest">
                  Hasil Analisis
                </span>
                <div className="flex items-center text-cuslightblack text-capt md:text-bs gap-2">
                  <Calendar size={16} />
                  <span>
                    {result.createdAt 
                      ? new Date(result.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
                      : new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </div>
              </div>

              {/* Label Badge */}
              <div className="mb-6 md:mb-8 shrink-0">
                {result.analysisResult.label === "Human" && (
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-success/10 text-success rounded-full font-bold text-bd md:text-bl">
                    <CheckCircle2 size={24} />
                    <span>Gambar Asli (Manusia)</span>
                  </div>
                )}
                {result.analysisResult.label === "AI" && (
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-danger/10 text-danger rounded-full font-bold text-bd md:text-bl">
                    <ShieldAlert size={24} />
                    <span>Terdeteksi AI</span>
                  </div>
                )}
                {result.analysisResult.label === "Uncertain" && (
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-caution/10 text-caution rounded-full font-bold text-bd md:text-bl">
                    <AlertTriangle size={24} />
                    <span>Sulit Dipastikan</span>
                  </div>
                )}
              </div>

              {/* Probability Bar */}
              <div className="mb-6 md:mb-8 shrink-0">
                <div className="flex justify-between items-end mb-3">
                  <span className="font-semibold text-cusblack text-bd md:text-bl">
                    Probabilitas AI
                  </span>
                  <span className="font-bold text-h3 md:text-h2 text-cusblack leading-none">
                    {result.analysisResult.aiProbability}%
                  </span>
                </div>
                <div className="w-full h-3 bg-cusdarkgrey/30 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      result.analysisResult.aiProbability > 70 ? 'bg-danger' : 
                      result.analysisResult.aiProbability > 40 ? 'bg-caution' : 'bg-success'
                    }`}
                    style={{ width: `${result.analysisResult.aiProbability}%` }}
                  ></div>
                </div>
              </div>

              {/* Indicators */}
              <div className="flex-1">
                <span className="font-semibold text-cusblack text-bd md:text-bl mb-4 block">
                  Indikator Penemuan:
                </span>
                <ul className="space-y-3 pb-4">
                  {result.analysisResult.indicators.map((indicator, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-cusblack shrink-0"></div>
                      <p className="text-bd-m md:text-bd text-cuslightblack leading-relaxed">
                        {indicator}
                      </p>
                    </li>
                  ))}
                  {result.analysisResult.indicators.length === 0 && (
                    <p className="text-bd-m text-cuslightblack italic">Tidak ada indikator spesifik yang ditemukan.</p>
                  )}
                </ul>
              </div>

            </div>
          </div>
        ) : errorMsg ? (
          <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center p-10 bg-cuswhite rounded-2xl shadow-[0px_0px_20px_-12px_rgba(0,0,0,0.3)]">
            <AlertTriangle size={48} className="text-danger mb-4" />
            <h2 className="text-h6 font-bold text-cusblack mb-2">Peringatan</h2>
            <p className="text-center text-bd text-cuslightblack">{errorMsg}</p>
            <button 
              onClick={() => navigate("/")}
              className="mt-6 px-6 py-2 primary-button rounded-md font-medium"
            >
              Kembali ke Beranda
            </button>
          </div>
        ) : (
          <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center p-10 bg-cuswhite rounded-2xl shadow-[0px_0px_20px_-12px_rgba(0,0,0,0.3)]">
            <p className="text-center text-bd text-cuslightblack">Gagal memuat hasil analisis.</p>
            <button 
              onClick={() => navigate("/")}
              className="mt-6 px-6 py-2 outline-button rounded-md font-medium"
            >
              Kembali ke Beranda
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default AnalysisResult;
