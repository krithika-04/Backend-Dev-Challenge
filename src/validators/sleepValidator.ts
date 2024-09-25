import { z } from "zod";

// Schema for user registration

// Schema for user login
export const sleepAssesmentSchema = z.object({
  sleepStruggle: z
    .object({
      from: z.number().optional(),
      to: z.number().optional(),
    })
    .optional(),

  bedTime: z.string().datetime().optional(),

  wakeUpTime: z.string().datetime().optional(),

  sleepDuration: z
    .number()
    .min(0, "sleepDuration must be at least 0")
    .max(24, "sleepDuration must be at most 24")
    .optional(),

  stepNo: z.number().optional(),
  isComplete:z.boolean()
});
