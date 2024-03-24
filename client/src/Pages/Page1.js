import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Page1() {
    const [developers, setDevelopers] = useState([]);
    const [devName, setDevName] = useState([]);
    const [devEmail, setDevEmail] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    // Handler to navigate to Home Page
    const goToHomePage = () => {
        navigate('/');
    };

    //Example get call to page1.js in backend
    const getDevelopers = () => {
        axios.get('http://localhost:3001/page1')
            .then(response => {
                setDevelopers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products:', error);
            });
    }

    //Example post call to page1.js in backend
    const addDeveloper = (name, email) => {
        axios.post('http://localhost:3001/page1', { Name: devName, Email: devEmail })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.error('There was an error adding a developer:', error);
            });
    };

    return (
        <div className="m-20">
            <h1 className="text-3xl">Page 1</h1><br />
            <p>Names and emails of developers:</p>
            <ul>
                {developers.map(data => (
                    <li key={data.Name}>{data.Name} - {data.Email}</li>
                ))}
            </ul>
            <br />
            <button
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/12"
                onClick={getDevelopers}>Get developers</button><br /><br /><br />
            Name:
            <input type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setDevName(e.target.value)} value={devName} placeholder="Name"></input><br />
            Email:
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text" onChange={(e) => setDevEmail(e.target.value)} value={devEmail} placeholder="Email"></input>
            <br />
            <button
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/12"
                onClick={addDeveloper}>Add developer</button><br /><br /><br /><br />
            <button
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/12"
                onClick={goToHomePage}>Go to HomePage</button>
        </div>
    );
}

export default Page1;
