import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, { message: "Too Short" }),
    username: z.string().min(2, { message: "Too Short" }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Too Short" }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match", path: ["confirmPassword"],
  })

  export const SigninValidation = z.object({
    username: z.string().min(2, { message: "Invalid Username or Email" }).email(),
    password: z.string().min(8, { message: "Incorrect password" }),
  })