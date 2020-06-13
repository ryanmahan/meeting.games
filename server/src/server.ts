import express = require("express");
import { Request, Response } from 'express';
import loggerMiddleware from './middlewares/logging';
import log4js from 'log4js';

const app: express.Application = express();
const logger = log4js.getLogger();
logger.level = "debug";

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong!");
});

app.use(loggerMiddleware);

app.listen(8080, () => {
  logger.info("App is listening on port 8080");
});
