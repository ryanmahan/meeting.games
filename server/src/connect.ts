const mongoose = require("mongoose");
import log4js from "log4js";
const logger = log4js.getLogger();

export default (db: string) => {
  const connect = () => {
    mongoose
      .connect(db, { useNewUrlParser: true })
      .then(() => {
        logger.info(`Successfully connected to ${db}`);
        return 
      })
      .catch((error: Error) => {
        logger.error("Error connecting to database: ", error);
      });
  };
  connect();

  mongoose.connection.on("disconnected", () => setTimeout(connect, 5000));
};
