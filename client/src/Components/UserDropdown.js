import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../Hooks/useAuthContext';
import { useLogout } from '../Hooks/useLogout';

const UserDropdown = () => {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);
    const { user } = useAuthContext();
    const { logout } = useLogout();

    const handleDropDown = () => {
        setOpen(!isOpen);
    }

    const goToLoginPage = () => {
        navigate("/login");
    }

    const goToSignupPage = () => {
        navigate("/signup");
    }

    const goToProfilePage = () => {
        navigate("/profile");
    }

    const goToEditProfilePage = () => {
        navigate("/profile/edit");
    }
    
    const goToMakePostPage = () => {
        navigate("/post/new");
    }

    const handleLogout = () => {
        logout();
    }

    return (
        <div className={`${user ? "h-full" : ""}`}>
            {user ? (
                <div className="h-full">
                    <button id="dropdownInformationButton" onClick={handleDropDown}
                        className="w-44 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                            {user.username} &#11167;
                    </button>

                    <div id="dropdownInformation" className={`${isOpen ? "block" : "hidden"} z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div>{user.name}</div>
                            <div className="font-medium truncate">{user.email}</div>
                            <div className="capitalize italic">{user.type}</div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                            <li>
                                <span className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={goToMakePostPage}>
                                    Make a Post
                                </span>
                            </li>
                            <li>
                                <span className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={goToProfilePage}>
                                    Profile
                                </span>
                            </li>
                            <li>
                                <span className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={goToEditProfilePage}>
                                    Account Settings
                                </span>
                            </li>
                            
                        </ul>
                        <div className="py-2">
                            <span className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                onClick={handleLogout}>
                                Logout
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-row gap-[2.22rem]">
                    <div className="relative leading-[1.33rem] cursor-pointer hover:border hover:border-transparent hover:hover:border-black rounded-md p-2 transition-all" onClick={goToLoginPage}>Login</div>
                    <div className="relative leading-[1.33rem] cursor-pointer hover:border hover:border-transparent hover:hover:border-black rounded-md p-2 transition-all" onClick={goToSignupPage}>Sign Up</div>
                </div>

            )}
        </div>
    );
};

export default UserDropdown;
