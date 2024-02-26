import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const userInfo = {
  userName: 'username',
  name: 'name',
  lastname: 'lastname',
  email: 'email@ufl.edu',
  password: 'password',
  type: 'athlete/sponsor',
  profilePicture: '/images/profile/profilePic.jpg',
  instagram: "instagram",
  tiktok: "tiktok",
  x: "x",
  posts: [
    { url: "/images/profile/post1.jpg" },
    { url: "/images/profile/post2.jpg" },
    { url: "/images/profile/post3.jpg" },
    { url: "/images/profile/post4.jpg" },
    { url: "/images/profile/post5.jpg" },
    { url: "/images/profile/post6.jpg" },
    { url: "/images/profile/post7.jpg" }
  ]
};

const UserProfilePage = ({ user }) => {
  const navigate = useNavigate(); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const goToEditProfile = () => {
    navigate('/profile/edit'); 
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex justify-end pr-80">
          <div className="nav-toggle cursor-pointer text-xl px-2 py-1 border rounded-lg bg-white text-gray-700 shadow-sm hover:bg-gray-300" onClick={toggleSidebar}>☰</div>
            {isSidebarOpen && (
              <aside className="fixed top-0 right-0 w-64 bg-white shadow-xl h-full z-50 transform transition-transform duration-300 ease-in-out">
                <div className="flex justify-between items-center border-b p-4">
                  <span className="text-lg font-semibold">Chomp Spotlight</span>
                  <button onClick={toggleSidebar} className="close-sidebar text-lg px-3 py-1 rounded-full hover:bg-gray-200">🗙</button>
                </div>
                <ul className="flex flex-col p-4">
                  <li className="py-2 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={goToEditProfile}>Edit Profile</li>
                </ul>
              </aside>
            )}
          </div>

        <div className="text-center mt-4 mb-7">
          <span className="text-lg font-bold">{user.userName}</span>
        </div>
  
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-28">
          <button className="bg-blue-500 text-white font-bold py-2 px-14 rounded-full">Follow</button>
          
          <div className="w-52 h-52">
            <img src={user.profilePicture} alt="Profile" className="rounded-full border-2 border-gray-300 object-cover w-full h-full"/>
          </div>
  
          <button className="bg-gray-300 text-black font-bold py-2 px-12 rounded-full">Message</button>
        </div>
        
        <div className="text-center mt-4">
          <span className="text-lg font-bold">{user.name}</span>
        </div>
  
        <div className="grid grid-cols-3 divide-x divide-gray-300 w-full max-w-4xl mx-auto mt-4">
          <div className="text-center">
            <a href={`https://www.instagram.com/${user.instagram}/`} target="_blank" rel="noopener noreferrer">
              <img src="/images/profile/instagram.jpg" alt="Instagram" className="mx-auto w-6 h-6 cursor-pointer" />
            </a>
          </div>

          <div className="text-center">
            <a href={`https://www.tiktok.com/@${user.tiktok}`} target="_blank" rel="noopener noreferrer">
              <img src="/images/profile/tiktok.jpg" alt="TikTok" className="mx-auto w-6 h-6 cursor-pointer" />
            </a>
          </div>

          <div className="text-center">
            <a href={`https://twitter.com/${user.x}`} target="_blank" rel="noopener noreferrer">
              <img src="/images/profile/x.jpg" alt="X" className="mx-auto w-6 h-6 cursor-pointer" />
            </a>
          </div>
        </div>
  
        <div className="mt-8 flex justify-center">
          <div className="grid grid-cols-3 gap-2 md:gap-1 mx-auto"> 
            {user.posts.map((post, index) => (
              <div key={index} className="aspect-square w-72 h-72 flex justify-center items-center mx-auto"> 
                <img src={post.url} alt={`Post ${index + 1}`} className="object-cover w-full h-full"/>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
  
    
};

export default UserProfilePage;
export { userInfo };