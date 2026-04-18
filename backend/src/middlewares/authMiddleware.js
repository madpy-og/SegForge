import User from "../models/User.js";
import jwt from "jsonwebtoken";

// REGISTER MIDDLEWARE
export const validateRegister = async (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({
      message: "Request body is empty",
    });
  }

  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    return res.status(400).json({
      message: "Full name, email, and password are required",
    });
  }

  next();
};

export const checkUserExistRegister = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(409).json({
      message: "Email is already registered",
    });
  }

  next();
};

// LOGIN MIDDLEWARE
export const validateLogin = async (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({
      message: "Request body is empty",
    });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  next();
};

export const checkUserExistLogin = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  next();
};

// ANY MIDDLEWARE
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Authentication token is missing",
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = {
      _id: decoded._id,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export const verifyTokenOptional = (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      req.user = null;
      return next();
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = {
      _id: decoded._id,
    };

    return next();
  } catch {
    req.user = null;
    return next();
  }
};
