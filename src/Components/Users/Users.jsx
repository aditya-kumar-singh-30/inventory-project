import React from "react";

// Generate 100 users dynamically
const generateUsers = (count) => {
  const users = [];
  for (let i = 1; i <= count; i++) {
    users.push({
      userId: i,
      userName: `User ${i}`,
      phone: `123-456-78${i.toString().padStart(2, "0")}`,
      email: `user${i}@example.com`,
    });
  }
  return users;
};

const UsersPage = () => {
  const users = generateUsers(100);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-6">
          User Information
        </h1>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-6 py-3 text-sm font-semibold tracking-wide">User ID</th>
                <th className="px-6 py-3 text-sm font-semibold tracking-wide">User Name</th>
                <th className="px-6 py-3 text-sm font-semibold tracking-wide">Phone</th>
                <th className="px-6 py-3 text-sm font-semibold tracking-wide">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.userId}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  } hover:bg-blue-100`}
                >
                  <td className="px-6 py-4 text-gray-800 text-sm">{user.userId}</td>
                  <td className="px-6 py-4 text-gray-800 text-sm">{user.userName}</td>
                  <td className="px-6 py-4 text-gray-800 text-sm">{user.phone}</td>
                  <td className="px-6 py-4 text-gray-800 text-sm">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 text-center mt-4">
          Showing {users.length} users.
        </p>
      </div>
    </div>
  );
};

export default UsersPage;
