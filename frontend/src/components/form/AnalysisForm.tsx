import React from "react";
import Card from "../Card";
import type { UploadSchema } from "../../schemas/input/UploadSchema";
import type { UseFormReturn } from "react-hook-form";
import { File, FileImage, Image } from "lucide-react";

type Props = {
  form: UseFormReturn<UploadSchema>;
  handleSubmit: (value: UploadSchema) => void;
};

const AnalysisForm = ({ form, handleSubmit }: Props) => {
  return (
    <>
      <form
        id="analysis-form"
        className="w-full"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files?.[0];
            if (!file) return;

            form.setValue("image", file, { shouldValidate: true });
          }}
          className="w-full flex flex-col items-center justify-center gap-4"
        >
          <label
            htmlFor="file"
            className="flex items-center justify-center secondary-button text-bs-m md:text-bs p-4 rounded-md"
          >
            <FileImage size={28} strokeWidth={2} />
          </label>
          <input
            type="file"
            id="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              form.setValue("image", file, { shouldValidate: true });
            }}
          />
          <div className="flex flex-col items-center justify-center text-center gap-1">
            <p className="text-bd-m md:text-bd text-cusblack font-semibold">
              Seret atau klik untuk unggah gambar
            </p>
            <p className="text-bs-m md:text-bs text-cusdarkgrey font-semibold">
              Format JPEG, PNG, WEBP, dan ukuran maksimal 5 MB
            </p>
          </div>
        </div>
      </form>
      <button
        form="analysis-form"
        className=" primary-button text-bs-m md:text-bs py-1 px-4 rounded-md"
      >
        Mulai Deteksi
      </button>
    </>
  );
};

export default AnalysisForm;
