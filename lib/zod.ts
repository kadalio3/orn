import { object, string, array } from "zod";

export const SignInSchema = object({
  email: string().email("Invalid Email"),
  password: string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const RegisterSchema = object({
  name: string().min(1, "Name must be more than 1 Character"),
  email: string().email("Invalid Email"),
  password: string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  ConfirmPassword: string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
}).refine((data) => data.password === data.ConfirmPassword, {
  message: "Password does not match",
  path: ["ConfirmPassword"],
});

export const AddCategorySchema = object({
  name: string().min(1, "Category name is required"),
})

export const AddNovelSchema = object({
  title: string().min(1, "Title is required"),
  content: string().min(1, "Content is required"),
  tags: array(string()).nonempty("At least one tag is required"),
  categoryId: string().min(1, "Category ID is required"),
});