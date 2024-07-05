const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://junedk1110:gxmBoTmX12TP1WFB@cluster0.x3sbjs3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(function () {
    console.log("connected");
  })
  .catch(function (err) {
    console.log(err);
  });

module.exports = mongoose.connection;
