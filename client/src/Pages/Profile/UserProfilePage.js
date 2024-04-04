import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../../Components/HeaderWithoutSearch"
import Footer from "../../Components/Footer"
import PostModal from './PostModal';
import { useAuthContext } from '../../Hooks/useAuthContext';
import axiosInstance from '../../axiosConfig';
import FollowModal from '../../Components/FollowModal';
import { useFollow } from "../../Hooks/useFollow"

const UserProfilePage = () => {
  const baseURL = "http://localhost:3001";
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePost, setActivePost] = useState(null);
  const { user } = useAuthContext();
  const [userPosts, setUserPosts] = useState([]);
  const [userProfile, setUserProfile] = useState({
    UserName: '',
    FirstName: '',
    LastName: '',
    Email: '',
    Type: '',
    SocialIG: '',
    SocialTikTok: '',
    SocialX: '',
    DefaultProfilePic: ''
  });
  const [showFollowModal, setShowFollowModal] = useState(false);
  const [tab, setTab] = useState("following");
  const { follow, unfollow, error, isLoading1, isFollowing, isFollowingUser, getFollowingCount, getFollowerCount, followingCount, followerCount } = useFollow();

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (user && user.userID) {
        try {
          const response = await axiosInstance.get(`/profile/fetch/${user.userID}`);
          setUserProfile({ ...response.data, posts: response.data.posts || [] });

          await getFollowingCount(user.userID);
          await getFollowerCount(user.userID);
        } catch (error) {
          console.error("Error fetching user info:", error.response ? error.response.data : error.message);
        }
      }
    };

    fetchUserInfo();
  }, [user]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (user && user.userID) {
        try {
          const response = await axiosInstance.get(`/profile/user/${user.userID}/posts`);
          setUserPosts(response.data);
        } catch (error) {
          console.error("Error fetching user posts:", error);
        }
      }
    };

    fetchUserPosts();
  }, [user]);

  const deletePost = async (postId) => {
    try {
      await axiosInstance.delete(`/profile/posts/${postId}`);
      
      const updatedPosts = userPosts.filter(post => post.PostID !== postId);
      setUserPosts(updatedPosts);
      
      setActivePost(null);
      
    } catch (error) {
      console.error("Failed to delete post", error);
      alert("Failed to delete the post. Please try again.");
    }
  };  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const goToEditProfile = () => {
    navigate('/profile/edit');
  };

  const goToNewPost = () => {
    navigate('/post/new');
  };

  const handlePostClick = (post) => {
    setActivePost(post);
  };

  const closePostModal = () => {
    setActivePost(null);
  };

  const openFollowModal = (ftab) => {
    setShowFollowModal(true);
    setTab(ftab)
  };

  const closeFollowModal = () => {
    setShowFollowModal(false);
  };

  return (
    <div className="relative bg-white pb-[10vh] min-h-screen">
      <Header />
      <div className="h-20"></div>
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
                <li className="py-2 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={goToNewPost}>New Post</li>
              </ul>
            </aside>
          )}
        </div>

        <div className="text-center mt-4 mb-7">
          <span className="text-lg font-bold">{userProfile.UserName}</span>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-28">
          <button className="bg-blue-500 text-white font-bold py-2 px-14 rounded-full invisible">Follow</button>
          <div className="w-52 h-52">
            <img src={`${baseURL}/media/profilePictures/${userProfile.DefaultProfilePic}`} alt="Profile" className="rounded-full border-2 border-gray-300 object-cover w-full h-full"/>
          </div>

          <div>
            <button className="bg-slate-500 text-white font-bold py-2 w-40 rounded-full my-1" onClick={() => openFollowModal("following")}>{followingCount} Following</button><br />
            <button className="bg-slate-500 text-white font-bold py-2 w-40 rounded-full my-1" onClick={() => openFollowModal("followers")}>{followerCount} Followers</button>
            {showFollowModal && <FollowModal userId={user.userID} onClose={closeFollowModal} initialTab={tab} />}
          </div>
        </div>

        <div className="text-center mt-4">
          <span className="text-lg font-bold">{userProfile.FirstName} {userProfile.LastName}</span>
        </div>

        <div className="grid grid-cols-3 divide-x divide-gray-300 w-full max-w-4xl mx-auto mt-4">
          <div className="text-center">
            <a href={`https://www.instagram.com/${userProfile.SocialIG}/`} target="_blank" rel="noopener noreferrer">
              <img src="/images/profile/instagram.jpg" alt="Instagram" className="mx-auto w-6 h-6 cursor-pointer" />
            </a>
          </div>

          <div className="text-center">
            <a href={`https://www.tiktok.com/@${userProfile.SocialTikTok}`} target="_blank" rel="noopener noreferrer">
              <img src="/images/profile/tiktok.jpg" alt="TikTok" className="mx-auto w-6 h-6 cursor-pointer" />
            </a>
          </div>

          <div className="text-center">
            <a href={`https://twitter.com/${userProfile.SocialX}`} target="_blank" rel="noopener noreferrer">
              <img src="/images/profile/x.jpg" alt="X" className="mx-auto w-6 h-6 cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="grid grid-cols-3 gap-2 md:gap-1 mx-auto">
            {userPosts.map((post, index) => (
              <div key={index} className="aspect-square w-72 h-72 flex justify-center items-center mx-auto" onClick={() => handlePostClick(post)}>
                <img src={`${baseURL}/media/${post.MediaURL}`} alt={`Post ${index}`} className="object-cover w-full h-full cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
        {activePost && <PostModal post={activePost} showInteractions={false} deletable={true} onClose={closePostModal} />}
      </div>
      <Footer />
    </div>
  );
};

export default UserProfilePage;