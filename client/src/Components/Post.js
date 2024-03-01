import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faUserPlus, faPhone } from '@fortawesome/free-solid-svg-icons';

const Post = ({ post }) => {
  return (
    <div className="bg-white my-4 rounded-lg overflow-hidden shadow-xl max-w-[800px] mx-auto px-48 py-4"> 
      <div className="p-4">
        <div className="flex items-center mb-4 justify-start" style={{ marginLeft: '-180px' }}> 
          <img src={post.profilePicture || "/images/profile/profilePic.jpg"} alt="Profile" className="w-16 h-16 rounded-full object-cover" />
          <div className="ml-4 flex flex-col">
            <div className="font-semibold text-lg">{post.username || "Username"}</div>
            <div className="flex space-x-2 mt-1">
              <a href={`https://www.instagram.com/${post.instagram}/`} target="_blank" rel="noopener noreferrer">
                <img src="/images/profile/instagram.jpg" alt="Instagram" className="w-4 h-4 cursor-pointer" />
              </a>
              <a href={`https://www.tiktok.com/@${post.tiktok}`} target="_blank" rel="noopener noreferrer">
                <img src="/images/profile/tiktok.jpg" alt="TikTok" className="w-4 h-4 cursor-pointer" />
              </a>
              <a href={`https://twitter.com/${post.x}`} target="_blank" rel="noopener noreferrer">
                <img src="/images/profile/x.jpg" alt="X" className="w-4 h-4 cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="flex-grow"></div>
        </div>

        <div className="mb-4 " style={{ marginLeft: '-180px' }}>
          <p className="text-gray-800 break-words">{post.caption || "An engaging caption goes here."}</p>
        </div>

        <div className="flex justify-center">
          <div className="post-image-container w-96 h-96 flex justify-center items-center">
            <img src={post.url || "placeholder-image.jpg"} alt="Post" className="post-image object-cover w-full h-full" />
          </div>
        </div>

        <div className="flex justify-around items-center p-4">
          <FontAwesomeIcon icon={faThumbsUp} size="lg" className="text-black hover:text-gray-700 transition duration-300" />
          <FontAwesomeIcon icon={faUserPlus} size="lg" className="text-black hover:text-gray-700 transition duration-300" />
          <FontAwesomeIcon icon={faPhone} size="lg" className="text-black hover:text-gray-700 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Post;
