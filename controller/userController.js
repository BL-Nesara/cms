const { StatusCodes } = require("http-status-codes");
const User = require("../model/userModel");
const userController = {
  getAll: async (req, res) => {
    try {
      const users = await User.find({}).select("-password");

      const filterdUsers = users.filter((item) => item.role !== "superadmin");

      res.json({ users: filterdUsers, length: filterdUsers.length });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
  },
  getCurrentUser: async (req, res) => {
    try {
      const id = req.user.id;
      const user = await User.findById({ _id: id });
      res.json({ user });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { name, mobile, image } = req.body;
      await User.findByIdAndUpdate(
        { _id: req.user.id },
        { name, mobile, image }
      );
      res.status(StatusCodes.OK).json({ msg: "update user info" });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const id = req.params.id;
      await User.findByIdAndDelete({ _id: id });
      res.json({ msg: "user data deleted successfully" });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
  },
  changeRole: async (req, res) => {
    try {
      const id = req.params.id;
      const { role } = req.body;
      await User.findByIdAndUpdate({ _id }, { role });
      res.json({ msg: "Role updated successfully" });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
  },
};
module.exports = userController;
