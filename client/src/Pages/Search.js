import React, { useState, useEffect } from "react";
import Footer from '../Components/Footer'

// Generate sample user data
const generateUsers = () => {
  const users = [];
  for (let i = 0; i < 48; i++) {
    users.push({
      name: `User ${i + 1}`,
      imageUrl: "https://via.placeholder.com/300",
      info: `Age: ${Math.floor(Math.random() * 40) + 20}, Location: ${["New York", "Los Angeles", "Chicago", "Houston", "Miami", "Atlanta", "Dallas", "Seattle"][Math.floor(Math.random() * 8)]}`,
      sports: ["volleyball", "soccer", "track-and-field"][Math.floor(Math.random() * 3)]
    });
  }
  return users;
}

export default function App() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [users, setUsers] = useState(generateUsers());
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle filter selection
  const handleFilterSelection = (filter) => {
    const isSelected = selectedFilters.includes(filter);
    if (isSelected) {
      setSelectedFilters(selectedFilters.filter((selectedFilter) => selectedFilter !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  // Function to check if user matches any selected filter
  const matchesFilter = (user) => {
    return selectedFilters.length === 0 || selectedFilters.some(filter => user.sports.includes(filter));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow overflow-y-auto" style={{ paddingBottom: "100px" }}>
        <div className="p-4 ml-48">
          <div className="flex gap-4">
            <button className={`border ${selectedFilters.includes("volleyball") ? 'bg-gray-700 text-white' : 'bg-transparent'} border-black px-4 py-2 rounded`} onClick={() => handleFilterSelection("volleyball")}>Volleyball</button>
            <button className={`border ${selectedFilters.includes("soccer") ? 'bg-gray-700 text-white' : 'bg-transparent'} border-black px-4 py-2 rounded`} onClick={() => handleFilterSelection("soccer")}>Soccer</button>
            <button className={`border ${selectedFilters.includes("track-and-field") ? 'bg-gray-700 text-white' : 'bg-transparent'} border-black px-4 py-2 rounded`} onClick={() => handleFilterSelection("track-and-field")}>Track and Field</button>
            <button className="border bg-transparent border-black px-4 py-2 rounded" onClick={() => setShowPopup(true)}>More</button>
          </div>
        </div>
        <div className="flex justify-start ml-48">
          <div className="grid grid-cols-5 gap-4 p-4">
            {users.map((user, index) => (
              matchesFilter(user) && (
                <div key={index} className="flex flex-col items-end w-64">
                  <div className="relative">
                    <img src={user.imageUrl} alt={user.name} className="w-full h-64 object-cover rounded" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-200 px-4 py-2 rounded-b">
                      {user.info}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow">
            {/* Popup content goes here */}
            <h2 className="text-lg font-bold mb-4">More Filters</h2>
            <button className="bg-gray-200 px-4 py-2 rounded mr-2" onClick={() => setShowPopup(false)}>Close</button>
            {/* Add additional filter buttons here */}
          </div>
        </div>
      )}
      <footer className="fixed bottom-0 w-full"><Footer/></footer>
    </div>
  );
}
