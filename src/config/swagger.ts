import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import { config } from ".";

import { sleepAssesment,updateSleepAssesment } from "../schemas/sleepAssesmentSchema";
import { createUser, createUserBody } from "../schemas/authSchema";

export const swaggeroption = {
  openapi: "3.0.0",
  info: {
    title: "Sleep Assesment API - Wysa Backend Developer Challenge",
    version: "1.0.0",
    description: "API documentation for your Node.js project",
  },
  servers: [
    {
      url: `http://${config.publicHost}:8000/api`,
      description: "Development server",
    },
  ],
  security: [
    {
      bearerAuth: [],
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },

    schemas: {
      createUserBody,
      sleepAssesment
    },
  },
  tags: [
    {
      name: "assesment",
      description: "Sleep Assesment managing API",
    },
    {
      name: "auth",
      description: "Authentication",
    },
   
  ],
  paths: {
    "/auth/register": {
      post: createUser,
    },

    "/sleep/{id}": {
      put: updateSleepAssesment,
    },
  },
};

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggeroption));
};
