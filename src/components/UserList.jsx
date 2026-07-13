export default function UserList({ users }) {
  if (users.length === 0) {
    return <p className="text-center text-gray-500">No users found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {users.map((user) => (
        <div key={user.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
          <h2 className="font-bold text-lg">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-blue-600 font-medium">{user.company.name}</p>
        </div>
      ))}
    </div>
  );
}