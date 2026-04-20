import { type RegisterSchema } from "../schemas/input/RegisterSchema";
import { type LoginSchema } from "../schemas/input/LoginSchema";

export const checkAuth = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/me`, {
      credentials: "include",
    });

    return res.ok;
  } catch (error) {
    return false;
  }
};

export const register = async (user: RegisterSchema) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    console.log("Failed to register account");
    return;
  }

  return res.json();
};

export const login = async (user: LoginSchema) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    console.log("Failed to login");
    return;
  }

  return res.json();
};

export const logout = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    console.log("Failed to logout");
    return;
  }
};
