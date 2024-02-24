import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfilePage = ({ userInfo }) => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [formDetails, setFormDetails] = useState(userInfo || {
    userName: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    type: 'Athlete',
    profilePicture: '/images/profile/profilePic.jpg',
    instagram: '',
    tiktok: '',
    x: ''
  });
  const [tempFormDetails, setTempFormDetails] = useState(formDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempFormDetails({
      ...tempFormDetails,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setFormDetails(tempFormDetails);
    setEditMode(false);
  };

  const handleCancel = () => {
    setTempFormDetails(formDetails);
    setEditMode(false);
  };

  return (
    <div className="flex items-center justify-center p-12">
      {/* Back to Profile Button */}
      <button onClick={() => navigate('/profile')} className="absolute left-0 top-0 ml-4 mt-4 rounded-full p-2 hover:bg-gray-200 transition duration-150 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form  >
          {/* User Name */}
          <div className="mb-5">
            <label htmlFor="userName" className="mb-3 block text-base font-medium">User Name</label>
            <input type="text" id="userName" name="userName" value={tempFormDetails.userName} onChange={handleChange} placeholder="User Name" className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-gray-700 outline-none focus:border-black ${editMode ? "" : "cursor-not-allowed"}`} disabled={!editMode} />
          </div>

          {/* Name */}
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium">Name</label>
            <input type="text" id="name" name="name" value={tempFormDetails.name} onChange={handleChange} placeholder="Name" className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-gray-700 outline-none focus:border-black ${editMode ? "" : "cursor-not-allowed"}`} disabled={!editMode} />
          </div>

          {/* Last Name */}
          <div className="mb-5">
            <label htmlFor="lastname" className="mb-3 block text-base font-medium">Last Name</label>
            <input type="text" id="lastname" name="lastname" value={tempFormDetails.lastname} onChange={handleChange} placeholder="Last Name" className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-gray-700 outline-none focus:border-black ${editMode ? "" : "cursor-not-allowed"}`} disabled={!editMode} />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium">Email</label>
            <input type="email" id="email" name="email" value={tempFormDetails.email} onChange={handleChange} placeholder="Email" className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-gray-700 outline-none focus:border-black ${editMode ? "" : "cursor-not-allowed"}`} disabled={!editMode} />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label htmlFor="password" className="mb-3 block text-base font-medium">Password</label>
            <input type="password" id="password" name="password" value={tempFormDetails.password} onChange={handleChange} placeholder="Password" className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-gray-700 outline-none focus:border-black ${editMode ? "" : "cursor-not-allowed"}`} disabled={!editMode} />
          </div>

          {/* Type - Not Editable */}
          <div className="mb-5">
            <label htmlFor="type" className="mb-3 block text-base font-medium">Type</label>
            <div id="type" className="w-full rounded-md border border-[#e0e0e0] bg-gray-200 py-3 px-3 text-base font-medium text-gray-700 cursor-not-allowed">
              {formDetails.type}
            </div>
          </div>

          {/* Instagram */}
          <div className="mb-5">
            <label htmlFor="instagram" className="mb-3 block text-base font-medium">Instagram</label>
            <input type="text" id="instagram" name="instagram" value={tempFormDetails.instagram} onChange={handleChange} placeholder="Instagram" className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-gray-700 outline-none focus:border-black ${editMode ? "" : "cursor-not-allowed"}`} disabled={!editMode} />
          </div>

          {/* TikTok */}
          <div className="mb-5">
            <label htmlFor="tiktok" className="mb-3 block text-base font-medium">TikTok</label>
            <input type="text" id="tiktok" name="tiktok" value={tempFormDetails.tiktok} onChange={handleChange} placeholder="TikTok" className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-gray-700 outline-none focus:border-black ${editMode ? "" : "cursor-not-allowed"}`} disabled={!editMode} />
          </div>

          {/* X */}
          <div className="mb-5">
            <label htmlFor="x" className="mb-3 block text-base font-medium">X</label>
            <input type="text" id="x" name="x" value={tempFormDetails.x} onChange={handleChange} placeholder="X" className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-gray-700 outline-none focus:border-black ${editMode ? "" : "cursor-not-allowed"}`} disabled={!editMode} />
          </div>

          {/* Edit and Save/Cancel Buttons */}
          {!editMode ? (
            <div className="flex items-center justify-center mt-4">
              <button type="button" onClick={handleEdit} class="hover:shadow-form w-64 rounded-md bg-gray-100 py-2 px-8 text-center text-base font-semibold text-black border border-gray-400 hover:bg-gray-200">Edit Profile</button>
            </div>
          ) : (
            <div className="flex justify-between gap-4">
              <button type="button" id="save" onClick={handleSave} class="hover:shadow-form w-32 rounded-md bg-gray-100 py-2 px-8 text-center text-base font-semibold text-black border border-gray-400 hover:bg-gray-200">Save</button>
              <button type="button" id="cancel" onClick={handleCancel} class="hover:shadow-form w-32 rounded-md bg-gray-100 py-2 px-8 text-center text-base font-semibold text-black border border-gray-400 hover:bg-gray-200">Cancel</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
