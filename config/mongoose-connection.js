require("dotenv").config();
const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug");

const dbgr = debug("development:mongoose");

const mongoUri = `${config.get("MONGODB_URI")}/celestia`;

mongoose
  .connect(mongoUri)
  .then(function () {
    dbgr("connected");
  })
  .catch(function (err) {
    dbgr("error", err);
  });

module.exports = mongoose.connection;
