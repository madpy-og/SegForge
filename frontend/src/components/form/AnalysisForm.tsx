import React from "react";
import type { UploadSchema } from "../../schemas/input/UploadSchema";
import type { UseFormReturn } from "react-hook-form";
import { CloudDownload } from "lucide-react";

type Props = {
  form: UseFormReturn<UploadSchema>;
  handleSubmit: (value: UploadSchema) => void;
};

const AnalysisForm = ({ form, handleSubmit }: Props) => {
  const file = form.watch("image");

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

            const droppedFile = e.dataTransfer.files?.[0];
            if (!droppedFile) return;

            form.setValue("image", droppedFile, {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            });
          }}
          className="w-full flex flex-col items-center justify-center gap-4"
        >
          <label
            htmlFor="file"
            className="flex items-center justify-center secondary-button text-bs-m md:text-bs p-4 rounded-md cursor-pointer"
          >
            <CloudDownload size={28} strokeWidth={2} />
          </label>

          <input
            type="file"
            id="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const selectedFile = e.target.files?.[0];
              if (!selectedFile) return;

              form.setValue("image", selectedFile, {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
              });
            }}
          />

          <div className="flex flex-col items-center justify-center text-center gap-1">
            {file?.name && (
              <div className="flex flex-col items-center justify-center">
                <p className="text-bs-m md:text-bs text-cusdarkgrey">
                  {file.name}
                </p>
                {form.formState.errors.image && (
                  <p className="text-capt-m md:text-capt text-danger ">
                    {form.formState.errors.image.message}
                  </p>
                )}
              </div>
            )}

            <p className="text-bd-m md:text-bd text-cusblack font-semibold">
              Seret atau klik untuk unggah gambar
            </p>

            <p className="text-bs-m md:text-bs text-cusdarkgrey">
              Format JPEG, PNG, WEBP, dan ukuran maksimal 5 MB
            </p>
          </div>
        </div>
      </form>

      <button
        form="analysis-form"
        className="primary-button text-bs-m md:text-bs py-2 px-4 rounded-md"
      >
        Mulai Deteksi
      </button>
    </>
  );
};

export default AnalysisForm;
