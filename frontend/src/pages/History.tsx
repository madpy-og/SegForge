import React from "react";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router";

type Props = {
  isAuthenticated: boolean;
};

const History = ({ isAuthenticated }: Props) => {
  if (isAuthenticated === true) {
    return (
      <>
        <Navbar isAuthenticated={isAuthenticated} />
        <main></main>
      </>
    );
  }

  return <Navigate to="/login" replace />;
};

export default History;
