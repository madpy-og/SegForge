import { z } from "zod";

export const uploadSchema = z.object({
  image: z
    .instanceof(File, { message: "File is required" })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Maximum 5MB",
    })
    .refine((file) => {
      const mimeAllowed = ["image/jpeg", "image/png", "image/webp"].includes(
        file.type,
      );

      const extAllowed = /\.(jpe?g|png|webp)$/i.test(file.name);

      return mimeAllowed || extAllowed;
    }, {
      message: "Format must be JPEG, JPG, PNG, or WEBP",
    }),
});

export type UploadSchema = z.infer<typeof uploadSchema>;
