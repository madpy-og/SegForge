import React from "react";
import Card from "../Card";
import type { UploadSchema } from "../../schemas/input/UploadSchema";
import type { UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<UploadSchema>;
  handleSubmit: (value: UploadSchema) => void;
};

const AnalysisForm = ({ form, handleSubmit }: Props) => {
  return (
    <form
      className="w-220 h-100"
      onSubmit={form.handleSubmit(handleSubmit)}
    ></form>
  );
};

export default AnalysisForm;
