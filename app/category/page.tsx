import CategoryTable from "@/components/auth/category-table"
import Breadcrumb from "@/components/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Category",
}

const CategoryPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
        <div className="max-w-screen-md mx-auto py-10">
            <Breadcrumb pageName="Category" />
            <CategoryTable />
        </div>
    </div>
  )
}

export default CategoryPage