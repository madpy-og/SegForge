import React, { type ReactNode } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router";
import { CircleCheck } from "lucide-react";

type Props = {
  openModal: boolean;
};

const VerifyEmailModal = ({ openModal }: Props) => {
  const navigate = useNavigate();
  return (
    <Modal openModal={openModal}>
      <div className="w-full max-w-110 mx-auto flex flex-col items-center justify-center gap-3 py-10 bg-cusgrey rounded-2xl shadow-[0px_0px_20px_-12px_rgba(0,0,0,0.3)]">
        <CircleCheck
          strokeWidth={1.4}
          className="w-7 md:w-10 h-7 md:h-10 text-success"
        />
        <h2 className="text-bd-m md:text-bd font-bold text-success leading-2">
          Registrasi berhasil!
        </h2>
        <p className="text-center text-bs-m md:text-bs text-success ">
          Silakan cek email Anda untuk melakukan verifikasi akun.{" "}
        </p>
        <button
          onClick={() => navigate("/login")}
          className="primary-button text-bs-m md:text-bs py-2 px-4 rounded-md"
        >
          Lanjut ke Login
        </button>
      </div>
    </Modal>
  );
};

export default VerifyEmailModal;
