import { z } from "zod";

export const uploadSchema = z.object({
  image: z
    .instanceof(File, { message: "File wajib diisi" })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Maksimal 5MB",
    })
    .refine((file) => {
      const mimeAllowed = ["image/jpeg", "image/png", "image/webp"].includes(
        file.type,
      );

      const extAllowed = /\.(jpe?g|png|webp)$/i.test(file.name);

      return mimeAllowed || extAllowed;
    }, {
      message: "Format harus JPEG, JPG, PNG, atau WEBP",
    }),
});

export type UploadSchema = z.infer<typeof uploadSchema>;
