import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";


const Header = () => {

    const [message, setMessage] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const onLoginTextClick = useCallback(() => {
        console.log("Login");
    }, []);


    const onLoginText2Click = useCallback(() => {
        // Please sync "Login" to the project

    }, []);

    const onSecondayContainerClick = useCallback(() => {
        // Please sync "Feed" to the project
    }, []);

    const handleInput = (event) => {
        setSearchValue(event.target.value);
    };

    const handleEnter = (event) => {
        if (event.key === "Enter" && searchValue.trim() !== "") {
            console.log("Search ", searchValue);
            const value = '/search/' + encodeURIComponent(searchValue);
            navigate(value);
        }
    }


    // Handler to navigate to Page1
    const goToLogin = () => {
        navigate("/login");
    };
    return (
        <div className="absolute w-full h-20 fixed top-0 left-0 bg-white shadow-[0px_0px_6px_rgba(0,_0,_0,_0.12)] h-[4.44rem] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[1.11rem] box-border gap-[1.11rem] z-[0] text-left text-[1.56rem]">
            <img className="relative rounded-81xl bg-gray-200 w-[2.22rem] h-[2.22rem]" src="logo.png" />
            <div className="flex-1 relative leading-[2rem] font-medium">
                Chomp Spotlight
            </div>
            <div className="rounded-md box-border w-[37.06rem] flex flex-row items-center justify-start p-[0.44rem] gap-[0.22rem] text-[0.78rem] text-black-100 border-[1px] border-solid border-gray-200">
                <div className="flex-1 relative leading-[1.11rem]">
                <input
                    type="search"
                    className="relative w-full h-8 outline-white border-4 border-transparent"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleInput}
                    onKeyDown={handleEnter}
                />
                </div>
            </div>
            <div className="bg-white flex flex-row items-center justify-center gap-[2.22rem] text-[0.89rem]">
                <div className="relative leading-[1.33rem]">Home</div>
                <div className="relative leading-[1.33rem]">Athletes</div>
                <div className="relative leading-[1.33rem]">Sponsors</div>
                <div
                    className="relative leading-[1.33rem] cursor-pointer"
                    onClick={onLoginTextClick}
                >
                    Login
                </div>
            </div>
        </div>
    );
};

export default Header;