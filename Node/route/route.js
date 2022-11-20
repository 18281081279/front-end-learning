import fs from "fs";
const render = (res, path) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
  res.write(fs.readFileSync("./static/home.html"), "utf-8");
  res.end();
};

const route = {
  "/login": (res) => {
    render(res, "login");
  },
  "/home": (res) => {
    render(res, "home");
  },
  "/404": (res) => {
    render(res, "404");
  },
};

export { route };
