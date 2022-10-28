const { StatusCodes } = require("http-status-codes");
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");

const authController = {
  register: async (req, res) => {
    try {
      const { name, email, mobile, password } = req.body;
      const encPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name,
        email,
        mobile,
        password: encPassword,
      });
      newUser.save();
      res
        .status(StatusCodes.OK)
        .json({ msg: "User registered successfully", data: newUser });
    } catch (error) {
      return res
        .staus(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
  },
  login: async (req, res) => {
    try {
      res.json({ msg: "login" });
    } catch (error) {
      return res
        .staus(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.json({ msg: "logout" });
    } catch (error) {
      return res
        .staus(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
  },
  refreshToken: async (req, res) => {
    try {
      res.json({ msg: "refreshToken" });
    } catch (error) {
      return res
        .staus(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
  },
  resetPassword: async (req, res) => {
    try {
      res.json({ msg: "resetPassword" });
    } catch (error) {
      return res
        .staus(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
  },
};

module.exports = authController;
