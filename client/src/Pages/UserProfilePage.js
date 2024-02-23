import React from 'react';

const userInfo = {
  userName: 'username',
  name: 'name',
  profilePicture: '/images/profile/profilePic.jpg',
  instagram: "@u",
  tiktok: "@t",
  x: "@x",
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
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
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
            <p className="font-bold">Instagram</p>
            <p className="font-semibold">{user.instagram}</p>
          </div>
          <div className="text-center">
            <p className="font-bold">TikTok</p>
            <p className="font-semibold">{user.tiktok}</p>
          </div>
          <div className="text-center">
            <p className="font-bold">X</p>
            <p className="font-semibold">{user.x}</p>
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