import express from "express";
import {
  register,
  logear,
  forgetPassword,
  confirmToken,
  newPassword,
  profile,
} from "../controllers/userControllers.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/", register);
router.post("/login", logear);
router.get("/forget-password", forgetPassword);
router.route("/forget-password/:token").get(confirmToken).post(newPassword);
router.get("/profile", checkAuth, profile);

export default router;
