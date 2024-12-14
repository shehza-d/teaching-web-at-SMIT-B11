import * as z from "zod";

export const schema = z.object({
  productName: z
    .string()
    .min(3, { message: "Minimum 3 letters needed" })
    .max(30, { message: "usama bas kr" }),
  description: z
    .string()
    .min(3, { message: "ye tw shuru hoty hi khatam hogya" })
    .max(30, { message: "LIMIT ma raho" })
    .optional(),
  price: z
    .string()
    .min(1, { message: "ye tw shuru hoty hi khatam hogya" })
    .max(30, { message: "LIMIT ma raho" })
    .optional(),
  stock: z
    .string()
    .min(1, { message: "ye tw shuru hoty hi khatam hogya" })
    .max(30, { message: "LIMIT ma raho" })
    .optional(),
  category: z
    .string()
    .min(3, { message: "ye tw shuru hoty hi khatam hogya" })
    .max(30, { message: "LIMIT ma raho" })
    .optional(),
});
