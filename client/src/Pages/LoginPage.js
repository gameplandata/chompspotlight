import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from "../Components/HeaderWithoutSearch"
import '../output.css'
import { useLogin } from '../Hooks/useLogin';

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {login, error, isLoading} = useLogin();

  const handleLogin = async () => {
    await login(username, password);
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="relative pb-[10vh] min-h-screen">
      <Header />
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
              {error && error.username &&
                <span className="text-sm text-red-500">*{error.username}</span>
              }
              <br />
              <span>Password:</span>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && error.password &&
                <span className="text-sm text-red-500">*{error.password}</span>
              }
              <br />
              <div className="flex flex-col justify-center items-center">
                <button
                  className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2"
                  onClick={handleLogin}
                  disabled={isLoading}
                >
                  Login
                </button>
                {error && error.server &&
                  <span className="text-sm text-red-500">Something went wrong! Error: {error.server}</span>
                }
                <br />
                <p>Don't have an account? Create on <span className="text-blue-500 cursor-pointer" onClick={goToSignup}>here</span>!</p>
              </div>
            </div><br />

          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default LoginPage;