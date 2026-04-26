import { z } from "zod";

export const registerSchema = z.object({
  fullname: z
    .string()
    .min(1, "Nama lengkap wajib diisi")
    .min(3, "Nama minimal 3 karakter"),

  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),

  password: z
    .string()
    .min(1, "Password wajib diisi")
    .min(6, "Password minimal 6 karakter"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
