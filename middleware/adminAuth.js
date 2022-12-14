const { StatusCodes } = require("http-status-codes");
const User = require("../model/userModel");

const adminAuth = async (req, res, next) => {
  try {
    //  res.json({ adminAuth: req.user });
    const id = req.user.id;
    const extUser = await User.findById({ _id: id });

    //validate role
    if (extUser.role !== "superadmin")
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Access denied for non-admin users" });

    next();
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: error.message });
  }
};

module.exports = adminAuth;
