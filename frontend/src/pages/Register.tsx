import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type RegisterSchema,
  registerSchema,
} from "../schemas/input/RegisterSchema";
import { register } from "../api/authApi";
import { useNavigate } from "react-router";
import ModalVerifyEmail from "../components/ModalVerifyEmail";
import FormRegister from "../components/FormRegister";

const Register = () => {
  const [openModal, setOpenModal] = useState(false);
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (value: RegisterSchema) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await register(value);

      setOpenModal(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <ModalVerifyEmail openModal={openModal} />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <FormRegister form={form} handleSubmit={handleSubmit} />
      </main>
    </>
  );
};

export default Register;
