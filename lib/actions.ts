"use server";
import { RegisterSchema, SignInSchema, AddCategorySchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/auth";
import { AuthError } from "next-auth";

// Register
export const signUpCredentials = async (prevState: unknown, formData: FormData) => {
  const validatedFields = RegisterSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
  } catch (error) {
    return { message: "Failed to register user" };
  }
  redirect("/login");
};

// Login
export const signInCredentials = async (prevState: unknown, formData: FormData) => {
  const validatedFields = SignInSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { email, password } = validatedFields.data;
  try {
    await signIn("credentials", { email, password, redirectTo: "/" });
  } catch (error) {
    if (error instanceof AuthError) {
      return { message: error.type === "CredentialsSignin" ? "Invalid credentials" : "Something went wrong" };
    }
    throw error;
  }
};

// Create Category
export const createCategory = async (prevState: any, formData: FormData) => {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return { message: "User is not authenticated or missing user ID" };
  }

  const validatedFields = AddCategorySchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  try {
    await prisma.category.create({
      data: { name: validatedFields.data.name, user: { connect: { id: session.user.id } } },
    });
    return { message: "Category created successfully", success: true };
  } catch (error) {
    console.error("Failed to create category:", error);
    return { message: "Failed to create category", success: false };
  }
};

// Delete Category
export const deleteCategory = async (categoryId: string) => {
  try {
    await prisma.category.delete({ where: { id: categoryId } });
    return { message: "Category deleted successfully", success: true };
  } catch (error) {
    console.error("Failed to delete category:", error);
    return { message: "Failed to delete category", success: false };
  }
};

// Update Category
export const updateCategory = async (categoryId: string, updatedData: { name: string }) => {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return { message: "User is not authenticated or missing user ID" };
  }

  const validatedFields = AddCategorySchema.pick({ name: true }).safeParse(updatedData);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  try {
    await prisma.category.update({
      where: { id: categoryId },
      data: { name: validatedFields.data.name },
    });
    return { message: "Category updated successfully", success: true };
  } catch (error) {
    console.error("Failed to update category:", error);
    return { message: "Failed to update category", success: false };
  }
};
