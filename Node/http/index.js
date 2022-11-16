import http from "http";
import { renderHTML, renderStatus } from "./util.js";

const server = http.createServer();

server.on("request", (req, res) => {
  const url = new URL(req.url, "http://127.0.0.1");
  res.writeHead(renderStatus(url.pathname), { "Content-Type": "text/html;charset=uts-8" });
  res.write(renderHTML(url.pathname));
  console.log(url.pathname);
  res.end();
});

server.listen(5000);
