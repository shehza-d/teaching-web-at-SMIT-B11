import { z } from "zod";

export const todoZodSchema = z.object({
  todo: z.string().min(1, "Title is required").max(256, "Title is too long"),
  // description: z.string().min(1, "Description is required"),
});
