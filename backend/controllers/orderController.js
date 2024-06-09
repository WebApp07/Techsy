import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc   Create new Order
//@route   GET /api/orders
//@access  Private
const addOrdersItems = asyncHandler(async (req, res) => {
  res.send("Add Order Item");
});

// @desc   Get logged in user orders
//@route   GET /api/orders/myorders
//@access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("Get my orders");
});

// @desc  Get order by ID
//@route   GET /api/orders/:id
//@access  Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("Add Order Item");
});

// @desc  Update order to paid
//@route   GET /api/orders/:id/pay
//@access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("Update Order to paid");
});

// @desc   Update order to delivered
//@route   GET /api/orders/:id/deliver
//@access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("Update order to paid");
});

// @desc   Get sll orders
//@route   GET /api/orders
//@access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("Get all orders");
});

export {
  addOrdersItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
