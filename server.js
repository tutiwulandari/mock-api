const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = require("json-server-auth");
const port = process.env.PORT || 3000;

// /!\ Bind the router db to the app
server.db = router.db

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

server.use(middlewares);
server.use(router);

server.listen(port);
