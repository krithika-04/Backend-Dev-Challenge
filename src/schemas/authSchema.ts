export const createUserBody = {
  type: "object",
  required: ["username", "password", "confirmPassword"],
  properties: {
    nickName: {
      type: "string",
      description: "username",
    },
    confirmPassword: {
      type: "string",
      description: "confirm password",
    },
    password: {
      type: "string",
      description: "password",
    },
  },
};

export const createUser = {
  summary: "register a user",
  tags: ["auth"],
  description: "register successfull",
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/createUserBody",
        },
      },
    },
  },
  responses: {
    "200": {
      content: {
        "application/json": {
          schema: {
            type: "string",
          },
        },
      },
    },
    "500": {
      description: "Some server error",
    },
  },
};


