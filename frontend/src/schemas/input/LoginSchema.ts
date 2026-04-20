import { z } from "zod";

export const loginSchema = z.object({
  email: z.email().min(6, ""),
  password: z.string().min(3, ""),
});

export type LoginSchema = z.infer<typeof loginSchema>;
