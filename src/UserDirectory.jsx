import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

export default function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // New state for the new user
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // Function to handle adding a new user
  const addUser = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) return;

    const userToAdd = {
      id: Date.now(), // Unique ID
      name: newUser.name,
      email: newUser.email,
      company: { name: 'Personal Project' }
    };

    setUsers([userToAdd, ...users]); // Adds new user to the top
    setNewUser({ name: '', email: '' }); // Clear form
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">User Directory</h1>

      
      <form onSubmit={addUser} className="mb-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="font-bold mb-2">Add New User</h2>
        <input 
          placeholder="Name" 
          value={newUser.name} 
          onChange={e => setNewUser({...newUser, name: e.target.value})}
          className="p-2 border rounded mr-2"
        />
        <input 
          placeholder="Email" 
          value={newUser.email} 
          onChange={e => setNewUser({...newUser, email: e.target.value})}
          className="p-2 border rounded mr-2"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>

      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <UserList users={filteredUsers} />
    </div>
  );
}