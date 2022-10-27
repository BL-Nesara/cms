const { StatusCodes } = require("http-status-codes");

const authController = {
  register: async (req, res) => {
    try {
      res.json({ msg: "register" });
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
