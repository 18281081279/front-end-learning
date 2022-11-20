import http from "http";

const Router = {};

const server = {};

server.use = (obj) => {
  Object.assign(Router, obj);
};

server.start = () => {
  http
    .createServer((req, res) => {
      const myURL = new URL(req.url, "http://127.0.0.1");
      try {
        Router[myURL.pathname](res);
      } catch (err) {
        Router["/404"](res);
      }
    })
    .listen(5100, () => {
      console.log("server start");
    });
};

export { server };
