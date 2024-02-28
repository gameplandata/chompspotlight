import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from "../Components/HeaderWithoutSearch"
import '../output.css'

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username !== '' && password !== '') {
      setIsLoggedIn(true);
    } else {
      alert('Please enter username and password');
    }
  };

  const goToSignup = () => {
    console.log('is this working?')
    navigate('/signup');
  };

  return (
    <div>
      <Header/>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h1 className="text-6xl text-center pt-[15vh]">Login</h1>
          <div className="flex justify-center items-center pt-[15vh]">

            <div className="w-1/5">
              <span>Username:</span>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <span>Password:</span>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <div className="flex flex-col justify-center items-center">
                <button
                  className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2"
                  onClick={handleLogin}
                >
                  Login
                </button><br />
                <p>Don't have an account? Create on <span className="text-blue-500 cursor-pointer" onClick={goToSignup}>here</span>!</p>
              </div>
            </div><br />

          </div>
          <Footer/>
        </div>
      )}
    </div>
  );
};

export default LoginPage;