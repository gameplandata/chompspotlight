import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Post = ({ post, showInteractions }) => {
  const baseURL = "http://localhost:3001"; 
  const navigate = useNavigate();
  console.log(post);
  return (
    <div className="bg-white my-4 rounded-lg overflow-hidden shadow-xl max-w-[800px] mx-auto px-48 py-4"> 
      <div className="p-4">
        <div className="flex items-center mb-4 justify-start" style={{ marginLeft: '-180px' }}> 
          <img src={post.DefaultProfilePic || "/images/profile/profilePic.jpg"} alt="Profile" className="w-16 h-16 rounded-full object-cover" />
          <div className="ml-4 flex flex-col">
            <div className="font-semibold text-lg cursor-pointer hover:text-blue-500" onClick={() => navigate (`/user/${post.username}`)}>{post.username || "Username"}</div>
            <div className="flex space-x-2 mt-1">
              <a href={`https://www.instagram.com/${post.SocialIG}/`} target="_blank" rel="noopener noreferrer">
                <img src="/images/profile/instagram.jpg" alt="Instagram" className="w-4 h-4 cursor-pointer" />
              </a>
              <a href={`https://www.tiktok.com/@${post.SocialTikTok}`} target="_blank" rel="noopener noreferrer">
                <img src="/images/profile/tiktok.jpg" alt="TikTok" className="w-4 h-4 cursor-pointer" />
              </a>
              <a href={`https://twitter.com/${post.SocialX}`} target="_blank" rel="noopener noreferrer">
                <img src="/images/profile/x.jpg" alt="X" className="w-4 h-4 cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="flex-grow"></div>
        </div>

        {/* Post caption */}
        <div className="mb-4 " style={{ marginLeft: '-180px' }}>
          <p className="text-gray-800 break-words">{post.caption || "No Caption"}</p>
        </div>

        {/* Image display*/}
        <div className="flex justify-center">
          <div className="post-image-container w-96 h-96 flex justify-center items-center">
            <img src={`${baseURL}/media/${post.url}`} alt="Post" className="post-image object-cover w-full h-full" />
          </div>
        </div>

      {showInteractions && (
        <div className="flex justify-around items-center p-4">
          <FontAwesomeIcon icon={faUserPlus} size="lg" className="text-black hover:text-gray-700 transition duration-300" />
          <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-black hover:text-gray-700 transition duration-300" />
        </div>
      )}
      </div>
    </div>
  );
};

export default Post;
