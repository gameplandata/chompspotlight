import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from '../Components/Footer'
import Header from '../Components/HeaderWithSearch'

const collegeSports = ["Football", "Basketball", "Baseball", "Softball", "Soccer", "Volleyball", "Track and Field", "Swimming", "Tennis", "Golf", "Wrestling", "Hockey", "Lacrosse"];
// Generate sample user data
const generateUsers = () => {
  const users = [];
  const genders = ["male", "female"];
  for (let i = 0; i < 48; i++) {
    users.push({
      name: `User ${i + 1}`,
      imageUrl: "https://via.placeholder.com/300",
      info: `Age: ${Math.floor(Math.random() * 40) + 20}, Location: ${["New York", "Los Angeles", "Chicago", "Houston", "Miami", "Atlanta", "Dallas", "Seattle"][Math.floor(Math.random() * 8)]}`,
      gender: genders[Math.floor(Math.random() * genders.length)],
      sports: collegeSports.slice(0, Math.floor(Math.random() * collegeSports.length) + 1)
    });
  }
  return users;
}

export default function Search() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [users, setUsers] = useState(generateUsers());
  const [showPopup, setShowPopup] = useState(false);
  const { searchText } = useParams();

  console.log(searchText);

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
    if (selectedFilters.length === 0) return true;
    if (selectedFilters.includes("male") && user.gender === "male") return true;
    if (selectedFilters.includes("female") && user.gender === "female") return true;
    return selectedFilters.some(filter => user.sports.includes(filter));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="h-20"></div>
      <div className="flex-grow overflow-y-auto" style={{ paddingBottom: "100px" }}>
        <div className="p-4 ml-48">
          <div className="flex gap-4">
            <button className={`border ${selectedFilters.includes(collegeSports[0]) ? 'bg-gray-700 text-white' : 'bg-transparent'} border-black px-4 py-2 rounded`} onClick={() => handleFilterSelection(collegeSports[0])}>{collegeSports[0]}</button>
            <button className={`border ${selectedFilters.includes(collegeSports[1]) ? 'bg-gray-700 text-white' : 'bg-transparent'} border-black px-4 py-2 rounded`} onClick={() => handleFilterSelection(collegeSports[1])}>{collegeSports[1]}</button>
            <button className={`border ${selectedFilters.includes(collegeSports[2]) ? 'bg-gray-700 text-white' : 'bg-transparent'} border-black px-4 py-2 rounded`} onClick={() => handleFilterSelection(collegeSports[2])}>{collegeSports[2]}</button>
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
            <h2 className="text-lg font-bold">More Filters</h2>
            <div className="py-2">
              <button className="bg-gray-200 px-4 py-2 rounded mr-2" onClick={() => setShowPopup(false)}>Close</button>
            </div>
            <div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Gender</h3>
                <div className="grid grid-cols-4 gap-4">
                  <button className={`border ${selectedFilters.includes("male") ? 'bg-gray-700 text-white' : 'bg-transparent'} border-black px-4 py-2 rounded`} onClick={() => handleFilterSelection("male")}>Male</button>
                  <button className={`border ${selectedFilters.includes("female") ? 'bg-gray-700 text-white' : 'bg-transparent'} border-black px-4 py-2 rounded`} onClick={() => handleFilterSelection("female")}>Female</button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Sport</h3>
                <div className="grid grid-cols-4 gap-4">
                  {collegeSports.map((sport, index) => (
                    <button key={index} className={`border ${selectedFilters.includes(sport) ? 'bg-gray-700 text-white' : 'bg-transparent'} border-black px-4 py-2 rounded`} onClick={() => handleFilterSelection(sport)}>{sport}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer className="fixed bottom-0 w-full"><Footer/></footer>
    </div>
  );
}
