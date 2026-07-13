import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

export default function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">User Directory</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <UserList users={filteredUsers} />
    </div>
  );
}