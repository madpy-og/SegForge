import { z } from "zod";

export const registerSchema = z.object({
  fullname: z
    .string()
    .min(1, "Fullname is required")
    .min(3, "Fullname must be at least 3 characters"),

  email: z
    .string()
    .min(1, "Email required")
    .email("Invalid email format"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
