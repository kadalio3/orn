// app/category/page.tsx

import CategoryTable from "@/components/auth/category-table";
import Breadcrumb from "@/components/breadcrumb";
import type { Metadata } from "next";
import { getCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Category",
};

const CategoryPage = async () => {
  const categories = await getCategory();

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-screen-md mx-auto py-10">
        <Breadcrumb pageName="Category" />
        <CategoryTable categories={categories} /> {/* Pass categories as a prop */}
      </div>
    </div>
  );
};

export default CategoryPage;
