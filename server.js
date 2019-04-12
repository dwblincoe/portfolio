require("dotenv").config();

const Next = require("next");
const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
// const session = require("js-base-lib");
const routes = require("./routes");
const cors = require("cors");
const PORT = process.env.PORT;

const next = Next({ dev: process.env.NODE_ENV !== "production" });

(async () => {
  await next.prepare();

  const app = express();

  app.use(compression());
  app.use(bodyParser.json());
  // app.use(session);
  app.use(routes.getRequestHandler(next));

  app.listen(PORT, () => {
    const { name, version } = require("./package.json");
    console.log(`${name} v${version} listening on port ${PORT}`);
  });
})();

const errorWare = (error, req, res, done) => {
  console.log("ROUTE ERR", error);
  return res.sendStatus(500);
};
