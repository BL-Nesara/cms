const mongoose = require("mongoose");
const assert = require("assert");

const connectDB = () => {
  return mongoose.connect(
    process.env.MONGO_URl,
    { useNewUrlParser: true },
    (err) => {
      if (err) assert.deepStrictEqual(null, err);
      console.log("Database Connected");
    }
  );
};
module.exports = connectDB;
