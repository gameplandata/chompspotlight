import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from "../Components/HeaderWithoutSearch"
import {useSignup } from "../Hooks/useSignup"

const SignupPage = () => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypedPassword, setRetypedPassword] = useState('');
  const [type, setType] = useState('');
  //const [error, setError] = useState(null);
  const {signup, error, isLoading} = useSignup();

  /*const signup = () => {
    axios.post('http://localhost:3001/signup', { firstName: firstName, lastName: lastName, email: email, username: username, password: password, retypedPassword: retypedPassword, type: type})
        .then(response => {
            console.log("all good bro")
            console.log(response)
            setError(null);
        })
        .catch(err => {
            console.error('There was an error:', err.response.data.error);
            setError(err.response.data.error);
            handleError();
        });
};*/

  const handleSignup = async () => {
      await signup(firstName, lastName, email, username, password, retypedPassword, type);
  };

  return (
    <div className="relative pb-[10vh] min-h-screen">
      <Header/>
      <h1 className="text-6xl text-center pt-[15vh]">Sign Up</h1>
      <div className="flex justify-center items-center pt-[7vh]">

        <div className="w-1/5">
          <span>First Name:</span>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Robert"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
          />
          {error && error.firstName && 
            <span className="text-sm text-red-500">*{error.firstName}</span>
          }
          <br />
          <span>Last Name:</span>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Brown"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />
          {error && error.lastName && 
            <span className="text-sm text-red-500">*{error.lastName}</span>
          }
          <br />
          <span>Email Address:</span>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="robertbrown@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && error.email && 
            <span className="text-sm text-red-500">*{error.email}</span>
          }
          <br />
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
          <span>Retype Password:</span>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="password"
            placeholder="Password"
            value={retypedPassword}
            onChange={(e) => setRetypedPassword(e.target.value)}
          />
          {error && error.retypedPassword && 
            <span className="text-sm text-red-500">*{error.retypedPassword}</span>
          }
          <br />
          <span>I am a...</span>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white" onChange={(e) => setType(e.target.value)}>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input id="horizontal-list-radio-license" type="radio" value="athlete" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label for="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Athlete </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input id="horizontal-list-radio-id" type="radio" value="sponsor" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label for="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sponsor</label>
              </div>
            </li>
          </ul>
          {error && error.type && 
            <span className="text-sm text-red-500">*{error.type}</span>
          }
          <br />
          <div className="flex flex-col justify-center items-center">
            <button
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2"
              onClick={handleSignup}
              disabled={isLoading}
            >
              Sign Up
            </button>
            {error && error.server && 
            <span className="text-sm text-red-500">Something went wrong! Error: {error.server}</span>
            }
          <br />
          </div>
        </div><br />

      </div>
      <Footer/>
    </div>
  );
};

export default SignupPage;