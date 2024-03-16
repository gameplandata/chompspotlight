import React, {useState } from "react";
import { NavigationType, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useAuthContext } from '../Hooks/useAuthContext';
import UserDropdown from './UserDropdown';

const Header = () => {

    const [message, setMessage] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const onHomeTextClick = useCallback(() => {
        goToHome();
    })

    const onLoginTextClick = useCallback(() => {
        goToLogin();
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

    const goToHome = () => {
        navigate("/");
    }
    
    const goToLogin = () => {
        navigate("/login");
    };
    return (
        <div className="overflow-visible fixed w-full z-10 top-0 left-0 bg-white shadow-[0px_0px_6px_rgba(0,_0,_0,_0.12)] h-[4.44rem] shrink-0 flex flex-row items-center justify-center p-[1.11rem] box-border gap-[1.11rem] z-[0] text-left text-[1.56rem]">
            <img 
                className="relative rounded-81xl bg-gray-200 w-[2.22rem] h-[2.22rem] cursor-pointer" 
                src="logo.png"
                onClick={onHomeTextClick}/>
            <div 
                className="flex-1 relative leading-[2rem] font-medium cursor-pointer"
                onClick={onHomeTextClick}>
                Chomp Spotlight
            </div>
            <div className="h-full bg-white flex flex-row items-center justify-center gap-[2.22rem] text-[0.89rem]">
                <div 
                    className="relative leading-[1.33rem] cursor-pointer"
                    onClick={onHomeTextClick}
                    >Home</div>
                <div className="relative leading-[1.33rem]">Athletes</div>
                <div className="relative leading-[1.33rem]">Sponsors</div>
                <UserDropdown/>
            </div>
        </div>
    );
};

export default Header;