import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { checkAuth } from "../api/authApi";
import History from "../pages/History";
import Analysis from "../pages/Analysis";
import VerifyEmail from "../pages/VerifyEmail";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      const isAuth = await checkAuth();
      setIsAuthenticated(isAuth);
      setIsAuthLoading(false);
    };

    verifyAuth();
  }, []);

  if (isAuthLoading) {
    return (
      <div className="min-h-screen bg-cusgrey flex items-center justify-center"></div>
    );
  }

  return (
    <div className="min-h-screen bg-cusgrey">
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route
          path="/analysis-result"
          element={<Analysis isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/history"
          element={<History isAuthenticated={isAuthenticated} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/verify-email" element={<VerifyEmail />}></Route>
      </Routes>
    </div>
  );
};

export default App;
