import { z } from "zod";

export const userSchema = z.object({
  _id: z.string(),
  fullname: z.string(),
  email: z.email(),
  passwordHash: z.string(),
});

export type UserSchema = z.infer<typeof userSchema>;
