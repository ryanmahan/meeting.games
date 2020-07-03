import { Request, Response, NextFunction } from 'express';
import log4js from 'log4js';

export default (req: Request, res: Response, next: NextFunction) => {
  const logger = log4js.getLogger()
  logger.info(`${req.method} ${req.path}`)
  next();
}