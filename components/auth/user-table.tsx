import { getUsers } from "@/lib/data";
import { FiEdit, FiTrash } from "react-icons/fi";

const UserTable = async () => {
    const users = await getUsers();
    if(!users?.length) return <h1 className="text-2xl">No User Found</h1>
  return (
    <table className="w-full bg-white mt-3">
    <thead className="border-b border-gray-100">
      <tr>
        <th className="py-3 px-6 text-left text-sm">Name</th>
        <th className="py-3 px-6 text-left text-sm">Email</th>
        <th className="py-3 px-6 text-left text-sm">Role</th>
        <th className="py-3 px-6 text-left text-sm">Aksi</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id} className="border-b border-gray-100">
          <td className="py-3 px-6">{user.name}</td>
          <td className="py-3 px-6">{user.email}</td>
          <td className="py-3 px-6">{user.role}</td>
          <td className="py-3 px-6">
            <div className="flex space-x-2">
              <button
                
                className="text-blue-500 hover:text-blue-700"
              >
                <FiEdit />
              </button>
              <button
                
                className="text-red-500 hover:text-red-700"
              >
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

export default UserTable;
