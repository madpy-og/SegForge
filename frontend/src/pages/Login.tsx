import React from "react";
import { useForm } from "react-hook-form";
import { type LoginSchema, loginSchema } from "../schemas/input/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginForm from "../components/form/LoginForm";

const Login = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (value: LoginSchema) => {
    try {
    } catch (error) {}
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <LoginForm form={form} handleSubmit={handleSubmit} />
    </main>
  );
};

export default Login;
