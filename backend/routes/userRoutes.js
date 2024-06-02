import express from "express";
const router = express.Router();
import {
  authUser,
  RegisterUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUsers,
  updateUser,
} from "../controllers/userController.js";

router.route("/").post(RegisterUser).get(getUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUsers).get(getUserById).put(updateUser);

export default router;
