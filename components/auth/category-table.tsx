"use client";

import { useState } from "react";
import { FiEdit, FiTrash, FiPlus } from "react-icons/fi";
import ProductForm from "./create-form";
import { deleteCategory } from "@/lib/actions";
import { formatDate } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

interface CategoryTableProps {
  categories: Category[];
  onDeleteSuccess: () => void; // Callback to refresh categories after deletion
}

const CategoryTable: React.FC<CategoryTableProps> = ({ categories, onDeleteSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = async (categoryId: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this category?");
    if (confirmed) {
      const response = await deleteCategory(categoryId);
      if (response.success) {
        onDeleteSuccess(); // Trigger the refresh callback upon successful deletion
      } else {
        alert("Failed to delete category.");
      }
    }
  };

  if (!categories?.length) return <h1 className="text-2xl">No Category Found</h1>;

  return (
    <div className="max-w-full mx-auto mt-5">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl">Category</h1>
        <button
          onClick={openModal}
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          <FiPlus className="mr-2" />
          Add New
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <ProductForm onSuccess={closeModal} /> {/* Pass close handler */}
          </div>
        </div>
      )}

      <table className="w-full bg-white mt-3">
        <thead className="border-b border-gray-100">
          <tr>
            <th className="py-3 px-6 text-left text-sm">No</th>
            <th className="py-3 px-6 text-left text-sm">Name</th>
            <th className="py-3 px-6 text-left text-sm">Created</th>
            <th className="py-3 px-6 text-left text-sm">Updated</th>
            <th className="py-3 px-6 text-left text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id} className="border-b border-gray-100">
              <td className="py-3 px-6">{index + 1}</td>
              <td className="py-3 px-6">{category.name}</td>
              <td className="py-3 px-6">{formatDate(category.createdAt.toString())}</td>
              <td className="py-3 px-6">{formatDate(category.updatedAt.toString())}</td>
              <td className="py-3 px-6">
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FiEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(category.id)}
                  >
                    <FiTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
