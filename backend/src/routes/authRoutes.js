import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  checkAuth,
  verifyEmail,
} from "../controllers/authController.js";
import {
  checkUserExistLogin,
  checkUserExistRegister,
  validateLogin,
  validateRegister,
  verifyToken,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/me", verifyToken, checkAuth);
router.post(
  "/register",
  validateRegister,
  checkUserExistRegister,
  registerUser,
);

router.get("/verify-email", verifyEmail);
router.post("/login", validateLogin, checkUserExistLogin, loginUser);
router.post("/logout", logoutUser);

export default router;
