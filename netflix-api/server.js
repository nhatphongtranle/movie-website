const express = require("express");
const cors = require("cors");
const userRouters = require("./router/UserRouter");
const mongoose = require("mongoose");

const app = express();
app.use(cors);
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
app.use("/api/user", userRouters);
app.listen(5000, () => {
  console.log("server started on port 5000");
});
