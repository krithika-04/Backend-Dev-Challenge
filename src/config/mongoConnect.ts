import mongoose from "mongoose";
import logger from "../utils/logger";
import { config } from ".";
export const mongoConnect = async () => {
  try {
    await mongoose.connect(config.mongoUrl);
    console.log("Connected to MongoDB");
    logger.info("Connected to MongoDB");
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    logger.error({
        message:"failed to connect to mongo",
        error:error
    })
  }
};
