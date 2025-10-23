// src/components/Users.jsx
import React from "react";

const Users = () => {
  const dummyUsers = [
    { id: 1, name: "John Doe", email: "john@gmail.com", role: "Customer" },
    { id: 2, name: "Jane Smith", email: "jane@gmail.com", role: "Customer" },
    { id: 3, name: "Mike Brown", email: "mike@gmail.com", role: "Admin" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map((user) => (
            <tr key={user.id} className="border-t hover:bg-green-50">
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
