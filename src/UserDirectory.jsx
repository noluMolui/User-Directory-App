import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

export default function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Fetching users from the required API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // 2. Filtering logic
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">User Directory</h1>
      
      /* 3. Controlled search input */
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      
      /* 4. Displays user list or "No users found." */
      <UserList users={filteredUsers} />
    </div>
  );
}