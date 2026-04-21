import React from "react";
import Navbar from "../components/Navbar";

type Props = {
  isAuthenticated: boolean;
};

const History = ({ isAuthenticated }: Props) => {
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <main></main>
    </>
  );
};

export default History;
