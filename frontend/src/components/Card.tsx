import React, { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className: string;
};

const Card = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} w-full h-full bg-cuswhite rounded-md shadow-[2px_2px_4px_-3px_rgba(0,0,0,0.3)]`}
    >
      {children}
    </div>
  );
};

export default Card;
