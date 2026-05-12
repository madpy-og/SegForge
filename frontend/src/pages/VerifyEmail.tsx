import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router";
import Badge from "../components/Badge";
import { Loader2, MailCheck, AlertCircle } from "lucide-react";
import { verifyEmail } from "../api/authApi";

const VerifyEmail = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/");
            return;
        }

        verifyEmail(token)
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                console.error("Gagal verifikasi:", error);
            });

    }, [token, navigate]);

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-cusgrey p-4">
            <div className="flex flex-col items-center text-center gap-6 bg-cuswhite p-10 md:py-10 rounded-2xl border border-cusblack/10 shadow-md max-w-sm w-full">

                <Badge value="Verifikasi Email" variant="primary" />

                {token ? (
                    <div className="flex flex-col gap-1">
                        <h2 className="text-h6-m md:text-h6 text-cusblack font-bold">
                            Verifikasi Berhasil
                        </h2>
                        <p className="text-bs-m md:text-bs text-cuslightblack leading-relaxed">
                            Email Anda telah berhasil diverifikasi.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-h6-m md:text-h6 text-cusblack font-bold">
                                Verifikasi Gagal
                            </h2>
                            <p className="text-bs-m md:text-bs text-cuslightblack leading-relaxed">
                                Email Anda telah gagal diverifikasi.
                            </p>
                        </div>
                    </>
                )}

            </div>
        </main>
    );
};

export default VerifyEmail;