import React from "react";
import { useForm } from "react-hook-form";
import { type LoginSchema, loginSchema } from "../schemas/input/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginForm from "../components/form/LoginForm";
import { login } from "../api/authApi.ts";
import { useNavigate } from "react-router";

type Props = {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ setIsAuthenticated }: Props) => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const handleSubmit = async (value: LoginSchema) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await login(value);

      setIsAuthenticated(true);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <LoginForm form={form} handleSubmit={handleSubmit} />
    </main>
  );
};

export default Login;
