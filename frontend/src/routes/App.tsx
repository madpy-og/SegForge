import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { checkAuth } from "../api/authApi";
import History from "../pages/History";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const check = async () => {
      const result = await checkAuth();

      setIsAuthenticated(result);
    };

    check();
  }, []);
  return (
    <div className="min-h-screen bg-cusgrey">
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/history" element={<History isAuthenticated={isAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
