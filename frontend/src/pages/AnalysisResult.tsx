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
      <main className="pt-25 md:pt-30 min-h-screen px-4 md:px-10 lg:px-20 pb-20">
        
        {isLoading ? (
          <div className="w-full max-w-5xl mx-auto bg-cuswhite rounded-2xl shadow-[0px_0px_20px_-12px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row min-h-[500px]">
            {/* Image Skeleton */}
            <div className="w-full md:w-1/2 bg-cusgrey flex flex-col items-center justify-center p-10 relative">
              <div className="absolute inset-0 bg-cusblack/5 animate-pulse"></div>
              <GridLoader color="#1f1f21" size={15} />
              <p className="mt-8 text-cusblack font-semibold tracking-wide animate-pulse">Memproses Gambar...</p>
            </div>
            
            {/* Content Skeleton */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center gap-6">
              <div className="w-32 h-6 bg-cusgrey rounded-md animate-pulse mb-4"></div>
              <div className="w-full h-12 bg-cusgrey rounded-full animate-pulse mb-2"></div>
              <div className="w-full h-14 bg-cusgrey rounded-md animate-pulse"></div>
              <div className="space-y-4 mt-4">
                <div className="w-3/4 h-4 bg-cusgrey rounded-md animate-pulse"></div>
                <div className="w-full h-4 bg-cusgrey rounded-md animate-pulse"></div>
                <div className="w-5/6 h-4 bg-cusgrey rounded-md animate-pulse"></div>
              </div>
            </div>
          </div>
        ) : result ? (
          <div className="w-full max-w-5xl mx-auto bg-cuswhite rounded-2xl shadow-[0px_0px_20px_-12px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row min-h-[500px]">
            
            {/* Image Side */}
            <div className="w-full md:w-1/2 bg-cusgrey flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-cusdarkgrey/20">
              <img 
                src={result.imageUrl} 
                alt="Analyzed" 
                className="max-w-full max-h-[500px] object-contain rounded-xl shadow-sm"
              />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-capt md:text-bs font-semibold text-cuslightblack uppercase tracking-widest">
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
              <div className="mb-8">
                {result.analysisResult.label === "Human" && (
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#04b34f]/10 text-[#04b34f] rounded-full font-bold text-bd md:text-bl">
                    <CheckCircle2 size={24} />
                    <span>Gambar Asli (Manusia)</span>
                  </div>
                )}
                {result.analysisResult.label === "AI" && (
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#a6192e]/10 text-[#a6192e] rounded-full font-bold text-bd md:text-bl">
                    <ShieldAlert size={24} />
                    <span>Terdeteksi AI</span>
                  </div>
                )}
                {result.analysisResult.label === "Uncertain" && (
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#ff9900]/10 text-[#ff9900] rounded-full font-bold text-bd md:text-bl">
                    <AlertTriangle size={24} />
                    <span>Sulit Dipastikan</span>
                  </div>
                )}
              </div>

              {/* Probability Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-3">
                  <span className="font-semibold text-cusblack text-bd md:text-bl">
                    Probabilitas AI
                  </span>
                  <span className="font-bold text-h3 md:text-h2 text-cusblack leading-none">
                    {result.analysisResult.aiProbability}%
                  </span>
                </div>
                <div className="w-full h-3 bg-cusgrey rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      result.analysisResult.aiProbability > 70 ? 'bg-[#a6192e]' : 
                      result.analysisResult.aiProbability > 40 ? 'bg-[#ff9900]' : 'bg-[#04b34f]'
                    }`}
                    style={{ width: `${result.analysisResult.aiProbability}%` }}
                  ></div>
                </div>
              </div>

              {/* Indicators */}
              <div>
                <span className="font-semibold text-cusblack text-bd md:text-bl mb-4 block">
                  Indikator Penemuan:
                </span>
                <ul className="space-y-3">
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
          <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center p-10 bg-cuswhite rounded-2xl shadow-md border border-red-100">
            <AlertTriangle size={48} className="text-red-500 mb-4" />
            <h2 className="text-h6 font-bold text-cusblack mb-2">Peringatan</h2>
            <p className="text-center text-bd text-cuslightblack">{errorMsg}</p>
            <button 
              onClick={() => navigate("/")}
              className="mt-6 px-6 py-2 bg-cusblack text-cuswhite rounded-md font-medium hover:bg-cusblack/90 transition"
            >
              Kembali ke Beranda
            </button>
          </div>
        ) : (
          <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center p-10 bg-cuswhite rounded-2xl shadow-md">
            <p className="text-center text-bd text-cuslightblack">Gagal memuat hasil analisis.</p>
          </div>
        )}
      </main>
    </>
  );
};

export default AnalysisResult;
