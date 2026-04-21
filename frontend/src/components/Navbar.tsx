import React from "react";
import { useNavigate, NavLink } from "react-router";
import { logout } from "../api/authApi";

type Props = {
  isAuthenticated: boolean;
};

const Navbar = ({ isAuthenticated }: Props) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await logout();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <header className="fixed top-0 w-full shadow-lg">
      <nav className="w-full flex items-center justify-between bg-cuswhite px-10 py-4">
        <div className="text-cusblack font-bold ">SegForge</div>
        <ul className="flex items-center justify-center gap-6 text-bs-m md:text-bs">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "" : "")}
            >
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              end
              className={({ isActive }) => (isActive ? "" : "")}
            >
              Riwayat
            </NavLink>
          </li>
        </ul>
        <button
          onClick={() => {
            isAuthenticated ? handleLogout() : navigate("/login");
          }}
          className="primary-button rounded-full text-bs-m md:text-bs  py-1.5 px-5"
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
