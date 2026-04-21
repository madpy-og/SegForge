import React from "react";

type Props = {
  value: string;
  variant: "primary" | "secondary";
};

const Badge = ({ value, variant }: Props) => {
  return (
    <div
      className={`${variant === "primary" ? "text-bs-m md:text-bs font-semibold text-cuswhite bg-cusblack py-1 px-4 rounded-full" : "text-bs-m md:text-bs font-semibold text-cusblack bg-cusdarkgrey py-1 px-4 rounded-full"}`}
    >
      {value}
    </div>
  );
};

export default Badge;
