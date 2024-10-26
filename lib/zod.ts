import { object, string } from "zod";

export const RegisterSchema = object({
    name: string().min(1, "Name must be more than 1 character"),
    email: string().email("Invalid Email"),
    password: string()
    .min(8, "Password must be more than 8 character")
    .max(32, "Password must be lest than 32 character"),
    ConfirmPassword: string()
    .min(8, "Password must be more than 8 character")
    .max(32, "Password must be lest than 32 character"),
}).refine((data) => data.password === data.ConfirmPassword, {
    message: "Passsword does not match",
    path: ["ConfirmPassword"],

})