import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type RegisterSchema,
  registerSchema,
} from "../schemas/input/RegisterSchema";
import RegisterForm from "../components/form/RegisterForm";

const Register = () => {
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
    } catch (error) {}
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <RegisterForm form={form} handleSubmit={handleSubmit} />
    </main>
  );
};

export default Register;
