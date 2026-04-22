import React from "react";
import { Link } from "react-router";
import type { UseFormReturn } from "react-hook-form";
import type { LoginSchema } from "../../schemas/input/LoginSchema";
import Badge from "../Badge";

type Props = {
  form: UseFormReturn<LoginSchema>;
  handleSubmit: (value: LoginSchema) => Promise<void>;
};

const LoginForm = ({ form, handleSubmit }: Props) => {
  return (
    <section className="flex flex-col gap-2 items-center justify-center">
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4 w-90 md:w-100 p-4"
      >
        <div className="flex flex-col items-center justify-center text-center mb-4">
          <Badge value="Segforge" variant="primary" />
          <h2 className="text-h2-m md:text-h2 text-cusblack font-bold">
            Selamat Datang
          </h2>
          <p className="text-bd-m md:text-bd text-cuslightblack">
            Sign in untuk pengalaman yang lebih baik.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="label-input">
            EMAIL
          </label>
          <input
            id="email"
            type="email"
            placeholder="madda.athiarahman@gmail.com"
            {...form.register("email")}
            className="input-box"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="label-input">
            PASSWORD
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            {...form.register("password")}
            className="input-box"
          />
        </div>
        <button className="primary-button rounded-md text-bd-m md:text-bd w-full h-10 md:h-12 mt-6">
          Sign In
        </button>
      </form>
      <p className="text-bs-m md:text-bs text-cuslightblack ">
        Belum memiliki akun?{" "}
        <span className="text-bs-m md:text-bs text-cusblack hover:text-cusblack/90 font-semibold underline">
          <Link to="/register">Sign Up</Link>
        </span>
      </p>
    </section>
  );
};

export default LoginForm;
