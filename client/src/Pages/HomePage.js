import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error('There was an error fetching the home page message:', error);
            });
    }, []);

    // Handler to navigate to Page1
    const goToPage1 = () => {
        navigate('/page1');
    };

    // Handler to navigate to Page1
    const goToLogin = () => {
        navigate('/login');
    };

    return (
        <div>
            <h1>Home Page</h1>
            <p>{message}</p>
            <button onClick={goToPage1}>Go to Page 1</button><br/>
            <button onClick={goToLogin}>Go to Login</button>
        </div>
    );
}

export default HomePage;
