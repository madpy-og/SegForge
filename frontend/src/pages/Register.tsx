import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type RegisterSchema,
  registerSchema,
} from "../schemas/input/RegisterSchema";
import RegisterForm from "../components/form/RegisterForm";
import { register } from "../api/authApi";
import { useNavigate } from "react-router";

const Register = () => {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const handleSubmit = async (value: RegisterSchema) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await register(value);

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <RegisterForm form={form} handleSubmit={handleSubmit} />
    </main>
  );
};

export default Register;
