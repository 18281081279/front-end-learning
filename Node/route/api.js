const render = (res, data) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
  res.write(data);
  res.end();
};

const apiRouter = {
  "/api/login": (res) => {
    render(res, `{ok:1}`);
  },
};

export { apiRouter };
