import { z } from "zod";

const registerSchema = z.object({
  fullname: z.string().min(3, ""),
  email: z.email().min(6, ""),
  password: z.string().min(3, ""),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
