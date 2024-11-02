import { getCategory } from "@/lib/data";
import { FiEdit, FiTrash } from "react-icons/fi";

const CategoryTable = async () => {
  const categories = await getCategory();
  if (!categories?.length)
    return <h1 className="text-2xl">No Category Found</h1>;
  return (
    <table className="w-full bg-white mt-3">
      <thead className="border-b border-gray-100">
        <tr>
          <th className="py-3 px-6 text-left text-sm">No</th>
          <th className="py-3 px-6 text-left text-sm">Nama</th>
          <th className="py-3 px-6 text-left text-sm">Created</th>
          <th className="py-3 px-6 text-left text-sm">Updated</th>
          <th className="py-3 px-6 text-left text-sm">Action</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id} className="border-b border-gray-100">
            <td className="py-3 px-6">{category.id}</td>
            <td className="py-3 px-6">{category.name}</td>
            <td className="py-3 px-6">{category.createdAt}</td>
            <td className="py-3 px-6">{category.updatedAt}</td>
            <td className="py-3 px-6">
              <div className="flex space-x-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <FiEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FiTrash />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryTable;
