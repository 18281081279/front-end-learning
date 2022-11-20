import { server } from "./server.js";
import { route } from "./route.js";
import { apiRouter } from "./api.js";

//注册路由
server.use(route);
server.use(apiRouter);

server.start();
