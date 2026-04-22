import React from "react";

type Props = {
  value: string;
  variant: "primary" | "secondary";
};

const Badge = ({ value, variant }: Props) => {
  return (
    <div
      className={`text-center text-bs-m md:text-bs font-semibold py-1 px-4 rounded-full shadow-[2px_2px_4px_-3px_rgba(0,0,0,0.3)] ${variant === "primary" ? " text-cuswhite bg-cusblack" : "text-cuslightblack bg-cusdarkgrey/30 "}`}
    >
      {value}
    </div>
  );
};

export default Badge;
