import React, { useState, useEffect } from "react";
import {Link, useParams } from "react-router-dom";
import Header from '../Components/HeaderWithSearch'
import Footer from '../Components/Footer'
import { useSearch } from '../Hooks/useSearch'

const collegeSports = ["Football", "Basketball", "Baseball", "Softball", "Soccer", "Volleyball", "Track and Field", "Swimming", "Tennis", "Golf", "Wrestling", "Hockey", "Lacrosse"];
// Generate sample user data

export default function Search() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [users, setUsers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const { searchText } = useParams();
  const { search, error, isLoading } = useSearch();
  
  
  useEffect(() => {
    const handleSearch = async () => {
      if (!searchText) {
        setUsers([]);
      } else {
        try {
          const result = await search(searchText); // Call the search function from the hook
          setUsers(result || []); // Assuming the result is an array of users
        } catch (error) {
          // Handle error
          console.error("Error while searching:", error);
        }
      }
    };
    handleSearch();
  }, [searchText]);

  console.log(searchText);
  console.log(users);

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
    return selectedFilters.some(filter => user.Sports.includes(filter.toLowerCase()));
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <header className="fixed w-full z-10"><Header/></header>
      <div className="h-20"></div>
      <div className="flex-grow overflow-y-auto" style={{ paddingBottom: "100px" }}>
        <div className="p-4 ml-48">
          <div className="flex gap-4">
            <button className={`border ${(selectedFilters.length > 0) ? 'bg-gray-700 text-white' : 'bg-transparent'} border-black px-4 py-2 rounded`} onClick={() => setShowPopup(true)}>Filters</button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-5 gap-4 p-4">
            {users.map((user, index) => (
              matchesFilter(user) && (
                <Link to={"/user/" + (user.UserName || "")} key={index} className="flex flex-col items-end w-64">
                  <div className="relative">
                    <img src={"http://localhost:3001/media/profilePictures/" + user.DefaultProfilePic} alt={user.FirstName + " " + user.LastName} className="w-full h-64 object-cover rounded" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-200 px-4 py-2 rounded-b">
                      <div className="flex justify-center">
                        {user.FirstName + " " + user.LastName}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">More Filters</h2>
              <button className="bg-gray-200 px-2 py-1 rounded" onClick={() => setShowPopup(false)}>X</button>
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
      <Footer/>
    </div>
  );
}
