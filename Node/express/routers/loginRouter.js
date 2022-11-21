const express = require("express");
const userModel = require("../model/userModel");
const loginRouter = express.Router();

//路由级别中间件,响应get求情
loginRouter.get("/", (req, res) => {
  console.log(req.query);
  res.send("login");
});

//路由级别中间件,相应post请求
loginRouter.post("/", (req, res) => {
  const { username, password, age } = req.body;
  userModel
    .create({
      username,
      password,
      age,
    })
    .then((data) => {
      console.log(data);
    });
  res.send({
    success: true,
  });
});
module.exports = loginRouter;
