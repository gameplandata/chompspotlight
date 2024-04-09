import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { useNavigate } from "react-router-dom";

const FollowModal = ({ userId, initialTab, onClose }) => {
    const baseURL = "http://localhost:3001"; 
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const navigate = useNavigate();
    const [tab, setTab] = useState(initialTab ? initialTab : "following");
    const activeClass = "cursor-pointer inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500";
    const inactiveClass = "cursor-pointer inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300";

    const goToUser = (username) => {
        //close the modal
        onClose();
        navigate(`/user/${username}`);
        window.location.reload();
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const followingResponse = await axiosInstance.get(`/follow/followings/${userId}`);
                setFollowing(followingResponse.data.followings);
                
                const followersResponse = await axiosInstance.get(`/follow/followers/${userId}`);
                setFollowers(followersResponse.data.followers);

            } catch (error) {
                console.error("Error fetching user info:", error.response ? error.response.data : error.message);
            }
        };
        fetchData();
    }, []);

    return (

        <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
            <div className="bg-black bg-opacity-70 absolute inset-0"></div>
            <div className="bg-white p-4 rounded-lg max-w-[95%] max-h-[95%] overflow-auto shadow-xl relative">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li className="me-2" onClick={() => setTab("following")}>
                        <span className={tab == "following" ? activeClass : inactiveClass}>Following - {following.length}</span>
                    </li>
                    <li className="me-2" onClick={() => setTab("followers")}>
                        <span className={tab == "followers" ? activeClass : inactiveClass}>Followers - {followers.length}</span>
                    </li>
                </ul>
                <div className="flex justify-start bg-white my-4 rounded-lg shadow-xl max-w-[800px] h-[400px] min-w-[325px] mx-auto pl-4 pr-20 py-4 overflow-y-scroll">
                    {tab == "following" &&
                        <div>
                            {following.map((f, index) => (
                                <div key={index} className="flex justify-start items-center mb-4 cursor-pointer" onClick={() => goToUser(f.UserName)}>
                                    <img src={`${baseURL}/media/profilePictures/${f.DefaultProfilePic}`} alt="Profile" className="w-16 h-16 rounded-full object-cover mr-5" />
                                    <div>
                                        <span><b>{f.FirstName} {f.LastName}</b></span><br />
                                        <span><i>{f.UserName}</i></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                    {tab == "followers" &&
                        <div>
                            {followers.map((f, index) => (
                                <div key={index} className="flex justify-start items-center mb-4 cursor-pointer" onClick={() => goToUser(f.UserName)}>
                                    <img src={`${baseURL}/media/profilePictures/${f.DefaultProfilePic}`} alt="Profile" className="w-16 h-16 rounded-full object-cover mr-5" />
                                    <div>
                                        <span><b>{f.FirstName} {f.LastName}</b></span><br />
                                        <span><i>{f.UserName}</i></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }

                </div>

                <button onClick={onClose} className="absolute top-0 right-0 m-4 text-3xl font-semibold">🗙</button>
            </div>
        </div>


    );
};

export default FollowModal;