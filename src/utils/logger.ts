import pino from "pino";

const logger = pino(
  {
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    transport:
      process.env.NODE_ENV !== "production"
        ? {
            target: "pino-pretty",
            options: {
              colorize: true,
              translateTime: true,
              ignore: "pid,hostname",
              destination: './logs.log',
            },
          }
        : undefined,
  },
  
);

export default logger;
