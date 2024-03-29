import React, { useState, useRef } from 'react';
import Header from "../../Components/HeaderWithoutSearch";
import Footer from "../../Components/Footer";
import { useAuthContext } from '../../Hooks/useAuthContext';
import axiosInstance from '../../axiosConfig';
import { useNavigate } from 'react-router-dom'; 

const UpdateProfilePicPage = () => {
  const navigate = useNavigate();
  const {user} = useAuthContext();
  const [media, setMedia] = useState(null);
  const [description, setDescription] = useState('');
  const [fileType, setFileType] = useState('');
  const fileInputRef = useRef(null); 

  const handleMediaChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileType(file.type.split('/')[0]); 
      setMedia(file);
    }
  };

const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to hold the file and other form data
    const formData = new FormData();
    formData.append('UserID', user.userID); 
    formData.append('media', media); 

    try {
        const response = await axiosInstance.post(`/profile/picture/${user.userID}`, formData);

        const { PostID } = response.data;
        console.log("Profile Picture uploaded");

    } catch (error) {
        console.error("Error making upload:", error.response ? error.response.data : error.message);
    }

    resetForm();
    navigate('/profile'); 
};

  const resetForm = () => {
    setMedia(null);
    setDescription('');
    setFileType('');
    fileInputRef.current.value = ""; 
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Header />
      <button onClick={() => navigate('/profile')} className="absolute left-0 top-14 ml-4 mt-4 rounded-full p-2 hover:bg-gray-200 transition duration-150 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <form className="space-y-6 bg-white shadow-sm rounded-lg p-6">
        <div>
          <label className="block text-sm font-medium text-gray-900">Edit Profile Picture</label>
          <input 
            ref={fileInputRef}
            type="file" 
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100" 
            accept="image/*,video/*" 
            onChange={handleMediaChange} 
          />
        </div>
      </form>

      {media && (
        <>
          <div className="mt-8 flex flex-col items-center">
            <div className="relative">
              <button onClick={resetForm} className="absolute z-10 inset-x-0 top-0 mx-auto py-2 px-4 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500 focus:ring-offset-2 text-black transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg" style={{ transform: 'translateY(-50%)' }}>Remove</button>
              <div className="flex justify-center mt-12">
                {fileType === 'image' && (
                  <img src={URL.createObjectURL(media)} alt="Preview" className="object-cover w-72 h-72 rounded-lg shadow-sm" />
                )}
                {fileType === 'video' && (
                  <video controls src={URL.createObjectURL(media)} className="object-cover w-72 h-72 rounded-lg shadow-sm"></video>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={handleSubmit} className="py-2 px-4 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500 focus:ring-offset-2 text-black transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg">Upload</button>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default UpdateProfilePicPage;
