const express = require("express");
const homeRouter = require("./routers/homeRouter");
const loginRouter = require("./routers/loginRouter");
require("./config/db.config");

const app = express();

app.use(express.urlencoded({ extended: false }));

//应用级别中间件
app.use((req, res, next) => {
  console.log("验证token");
  next();
});

app.use("/home", homeRouter);
app.use("/login", loginRouter);

//错误处理中间件
app.use((req, res) => {
  res.status(404).send("丢了");
});
app.listen(3000, () => {
  console.log("server start");
});
