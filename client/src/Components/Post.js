import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Post = ({ post, showInteractions }) => {
  const baseURL = "http://localhost:3001";
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="flex-col bg-white my-4 rounded-lg overflow-hidden shadow-xl w-[800px] mx-auto px-10 py-4">
      {showModal ? (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
          <div className="bg-white p-4 rounded-lg max-w-[95%] max-h-[95%] overflow-auto shadow-xl relative flex flex-col items-center">
            <h1 className="text-2xl font-semibold">Contact Information</h1>
            <div className = "flex flex-col items-start">
            <h2 className="text-xl font-semibold">Name: {capitalizeFirstLetter(post.FirstName)} {capitalizeFirstLetter(post.LastName)}</h2>
            <h2 className="text-xl font-semibold">Email: {post.Email}</h2>
            </div>
            <button className="mt-4 text-xl border-black border-2 px-2 py-1 rounded-md cursor-pointer" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      ) : null}
        <div className="flex items-center mb-4 justify-start w-full mt-4"> 
          <img src={`${baseURL}/media/profilePictures/${post.DefaultProfilePic}`} alt="Profile" className="w-16 h-16 rounded-full object-cover" />
          {/* <div className="ml-4 flex flex-col"> */}
            <div className="font-semibold text-2xl cursor-pointer hover:text-blue-500 ml-4" onClick={() => navigate(`/user/${post.UserName}`)}>{post.UserName || "Username"}</div>
            <div className="flex justify-end space-x-5 mt-1 w-full">
              <a href={`https://www.instagram.com/${post.SocialIG}/`} target="_blank" rel="noopener noreferrer">
                <img src="/images/profile/instagram.jpg" alt="Instagram" className="w-10 h-10 cursor-pointer" />
              </a>
              <a href={`https://www.tiktok.com/@${post.SocialTikTok}`} target="_blank" rel="noopener noreferrer">
                <img src="/images/profile/tiktok.jpg" alt="TikTok" className="w-10 h-10 cursor-pointer rounded-md" />
              </a>
              <a href={`https://twitter.com/${post.SocialX}`} target="_blank" rel="noopener noreferrer">
                <img src="/images/profile/x.jpg" alt="X" className="w-10 h-10 cursor-pointer rounded-md" />
              </a>
            {/* </div> */}
          </div>
        </div>

        {/* Post caption */}
        <div className="mb-4 ">
          <p className="text-xl text-gray-800 break-words">{post.Description || "No Caption"}</p>
        </div>

        {/* Image display*/}
        <div className="flex justify-center">
          <div className="post-image-container w-96 h-96 flex justify-center items-center">
            <img src={`${baseURL}/media/${post.MediaURL}`} alt="Post" className="post-image object-cover w-full h-full" />
          </div>
        </div>

        {showInteractions && (
          <div className="flex justify-center space-x-36 items-center p-4">
            <FontAwesomeIcon icon={faUserPlus} size="2xl" className="text-black hover:text-gray-700 transition duration-300 cursor-pointer" />
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2xl"
              className="text-black hover:text-gray-700 transition duration-300 cursor-pointer"
              onClick={() => setShowModal(true)}
            />
          </div>
        )}
      </div>
  );
};

export default Post;
