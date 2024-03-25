import React, { useState, useRef } from 'react';
import Header from "../Components/HeaderWithoutSearch";
import Footer from "../Components/Footer";
import { useAuthContext } from '../Hooks/useAuthContext';
import axiosInstance from '../axiosConfig';

const NewPostPage = () => {
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

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    console.log("Finalizing post with", { media, description });

    try {
        if (media) {
            // Send UserID, MediaURL, and Description in a single request
            const response = await axiosInstance.post(`/profile/post/new/${user.userID}`, {
                UserID: user.userID,
                MediaURL: "post", 
                Description: description
            });

            const { PostID } = response.data;
            console.log("Post created with PostID:", PostID);
        } 
    } catch (error) {
        console.error("Error making post:", error.response ? error.response.data : error.message);
    }
    resetForm();
};

const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to hold the file and other form data
    const formData = new FormData();
    formData.append('UserID', user.userID); 
    formData.append('Description', description);
    formData.append('media', media); 

    try {
        const response = await axiosInstance.post(`/profile/post/new/${user.userID}`, formData);

        const { PostID } = response.data;
        console.log("Post created with PostID:", PostID);

    } catch (error) {
        console.error("Error making post:", error.response ? error.response.data : error.message);
    }

    resetForm(); 
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
      <form className="space-y-6 bg-white shadow-sm rounded-lg p-6">
        <div>
          <label className="block text-sm font-medium text-gray-900">Upload Picture or Video</label>
          <input 
            ref={fileInputRef}
            type="file" 
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100" 
            accept="image/*,video/*" 
            onChange={handleMediaChange} 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900">Description</label>
          <textarea 
            className="mt-1 block w-full p-2.5 text-sm text-gray-900 border rounded-lg focus:ring-gray-500 focus:border-gray-500" 
            rows="4" 
            value={description} 
            onChange={handleDescriptionChange} 
            placeholder="Enter a description..."
          ></textarea>
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
            <button onClick={handleSubmit} className="py-2 px-4 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500 focus:ring-offset-2 text-black transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg">Post</button>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default NewPostPage;
