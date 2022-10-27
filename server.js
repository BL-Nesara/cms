const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const assert = require("assert");
const fileUpload = require("express-fileupload");
const { StatusCodes } = require("http-status-codes");
const port = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

const authRoute = require("./route/authRoute");
const userRoute = require("./route/userRoute");

app.use(`/api/v1/auth`, authRoute);
app.use(`/api/v1/user`, userRoute);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server started running in port ${port}`);
    });
  } catch (error) {
    return resizeBy
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: error.message });
  }
};

start();