export default function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search users by name..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 outline-none"
      />
    </div>
  );
}