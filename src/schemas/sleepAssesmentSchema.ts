export const sleepAssesment = {
  type: "object",
  required: ["stepNo","userId"],
  properties: {
    isComplete:{
      type:"boolean"
    },
    userId: {
      type: "string",
      description: "id of user",
    },
    stepNo: {
      type: "string",
      description: "current step",
    },
    sleepDuration: {
      type: "number",
      description: "sleep duration of user",
    },
    sleepStruggle:{type:"object",properties:{
      from:{type:"number"},
      to:{type:"number"}
    }},
    bedTime:{
      type: "string",
      description: "bed time of user",
    },
    wakeUpTime:{
      type: "string",
      description: "wake up time of user",
    },
    
  },
};
export const assesmentParams = {
  in: "path",
  name: "id",
  schema: {
    type: "string",
  },
  required: true,
  description: "The assesment id",
};
export const sleepAssesmentResponse = {
  type: "object",

  properties: {
    id: {
      type: "string",
      description: "The id of the product",
    },
    name: {
      type: "string",
      description: "The name of the product",
    },
    description: {
      type: "string",
      description: "The description of the product",
    },
  },
};

export const updateSleepAssesment = {
  summary: " Submit answers for a sleep assessment during onboarding. ",
  description: "This api is used to submit answers for a sleep assessment",
  tags: ["assesment"],
  parameters: [assesmentParams],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/sleepAssesment",
        },
      },
    },
  },
  responses: {
    "200": {
      content: {
        "application/json": {
          schema: {
           sleepAssesmentResponse
          },
        },
      },
    },
    "404": {
      description: "Assesment not found",
    },
    "500": {
      description: "Some server error",
    },
  },
};

