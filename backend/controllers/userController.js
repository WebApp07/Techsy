import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc    Auth user & get token
//@route   POST /api/users/login
//@access  Public
const authUser = asyncHandler(async (req, res) => {
  res.send("Auth user");
});

// @desc    Register user
//@route   GET /api/users
//@access  Public
const RegisterUser = asyncHandler(async (req, res) => {
  res.send("Register user");
});

// @desc    Logout user / clear cookie
//@route   POST /api/users/logout
//@access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout user");
});

// @desc    Get user profile
//@route   GET /api/users/profile
//@access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get user profile");
});

// @desc    update user profile
//@route   GET /api/users
//@access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update user profile");
});

// @desc    Get users
//@route   GET /api/users
//@access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @desc    Get user By ID
//@route   GET /api/users/:id
//@access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user By ID");
});

// @desc    Delete user
//@route   DELETE /api/users/:id
//@access  Private/Admin
const deleteUsers = asyncHandler(async (req, res) => {
  res.send("Delete user");
});

// @desc    Update user
//@route   PUT /api/users/:id
//@access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("Update user");
});

export {
  authUser,
  RegisterUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUsers,
  updateUser,
};
