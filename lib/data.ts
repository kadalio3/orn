import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const getUsers = async () => {
    const session = await auth();
    if (!session || !session.user || session.user.role !== "admin")
        redirect("/dashboard");

    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.log(error);
    }
}

export const getCategory = async () => {
    const session = await auth();
    if (!session || !session.user) redirect("/dashboard");

    try {
        const categories = await prisma.category.findMany();
        return categories;
    } catch (error) {
        console.log("Error fetching categories:", error);
        return [];
    }
};
