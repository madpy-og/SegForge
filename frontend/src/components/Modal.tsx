import React, { type ReactNode } from "react";

type Props = {
  openModal: boolean;
  children: ReactNode;
};

const Modal = ({ openModal, children }: Props) => {
  return (
    <div
      className={`${openModal === false ? "hidden" : "fixed inset-0 z-70"} w-screen h-screen bg-cusblack/20 backdrop-blur-xs`}
    >
      <div
        className={`${openModal === false ? "hidden" : "flex items-center justify-center"} z-100 w-screen h-screen`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
