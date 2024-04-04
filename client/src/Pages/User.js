import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from "../Components/HeaderWithoutSearch"
import Footer from "../Components/Footer"
import PostModal from './Profile/PostModal';
import axiosInstance from '../axiosConfig';
import { useAuthContext } from '../Hooks/useAuthContext';
import FollowModal from '../Components/FollowModal';
import {useFollow} from "../Hooks/useFollow"

const UserProfilePage = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { username } = useParams();
    const baseURL = "http://localhost:3001";
    const [isLoading, setIsLoading] = useState(true);
    const [activePost, setActivePost] = useState(null);
    const [userPosts, setUserPosts] = useState([]);
    const [userProfile, setUserProfile] = useState({
        UserID: '',
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
    const {follow, unfollow, error, isLoading1, isFollowing, isFollowingUser, getFollowingCount, getFollowerCount, followingCount, followerCount} = useFollow();

    const openFollowModal = (ftab) => {
        setShowFollowModal(true);
        setTab(ftab)
    };

    const closeFollowModal = () => {
        setShowFollowModal(false);
    };

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axiosInstance.get(`/user/fetch/${username}`);
                setUserProfile({ ...response.data, posts: response.data.posts || [] });

                // Attempt fetching user posts only if user exists in the first place
                if (response.data && response.data.UserID && response.data.UserID != '') {
                    const response2 = await axiosInstance.get(`/user/${response.data.UserID}/posts`);
                    setUserPosts(response2.data);
            
                    await isFollowingUser(response.data.UserID);
                    await getFollowingCount(response.data.UserID);
                    await getFollowerCount(response.data.UserID);
                }

                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.error("Error fetching user info:", error.response ? error.response.data : error.message);
            }
        };
        fetchUserInfo();
    }, []);

    const handlePostClick = (post) => {
        setActivePost(post);
    };

    const closePostModal = () => {
        setActivePost(null);
    };

    const handleFollow = async () => {
        if (!user) {
            return navigate('/login');
        }

        if (isFollowing) { //unfollow
            await unfollow(userProfile.UserID);
        } else { //follow
            await follow(userProfile.UserID);
        }
        await getFollowerCount(userProfile.UserID);
    }

    return (
        <div className="relative bg-white pb-[10vh] min-h-screen">
            <Header />
            <div className="h-20"></div>
            {isLoading ? (
                <div className="text-center text-3xl pt-20">Loading...</div>
            ) : (
                <div>
                    {userProfile.UserID == '' ? (<div className="text-center text-3xl pt-20">User not found</div>) : (
                        <div className="container mx-auto p-4">
                            <div className="text-center mt-4 mb-7">
                                <span className="text-lg font-bold">{userProfile.UserName}</span>
                            </div>

                            <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-28">
                                <button className={`bg-blue-500 text-white font-bold py-2 w-40 rounded-full ${user && user.userID == userProfile.UserID ? "invisible" : "visible"}`} onClick={handleFollow}>{isFollowing ? "Following" : "Follow"}</button>

                                <div className="w-52 h-52">
                                    <img src={`${baseURL}/media/profilePictures/${userProfile.DefaultProfilePic}`} alt="Profile" className="rounded-full border-2 border-gray-300 object-cover w-full h-full" />
                                </div>

                                <div>
                                    <button className="bg-slate-500 text-white font-bold py-2 w-40 rounded-full my-1" onClick={() => openFollowModal("following")}>{followingCount} Following</button><br />
                                    <button className="bg-slate-500 text-white font-bold py-2 w-40 rounded-full my-1" onClick={() => openFollowModal("followers")}>{followerCount} Followers</button>
                                    {showFollowModal && <FollowModal userId={userProfile.UserID} onClose={closeFollowModal} initialTab={tab} />}
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
                            {activePost && <PostModal post={activePost} deletable={user && user.userID == userProfile.UserID} onClose={closePostModal} />}
                        </div>)}
                </div>
            )}
            <Footer />
        </div>
    );
};

export default UserProfilePage;