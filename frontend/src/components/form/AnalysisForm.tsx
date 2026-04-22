import React from "react";
import Card from "../Card";

type Props = {
  handleSubmit: () => void;
};

const AnalysisForm = ({ handleSubmit }: Props) => {
  return <form className="w-220 h-100" onSubmit={handleSubmit}></form>;
};

export default AnalysisForm;
