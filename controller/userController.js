const { StatusCodes } = require("http-status-codes");
const userController = {
  getAll: async (req, res) => {
    try {
      res.json({ msg: "get all user info" });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
  },
  getCurrentUser: async (req, res) => {
    try {
      res.json({ msg: "get login user info" });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      res.json({ msg: "update user info" });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      res.json({ msg: "delete user" });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
  },
  changeRole: async (req, res) => {
    try {
      res.json({ msg: "change user role" });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
  },
};
module.exports = userController;
