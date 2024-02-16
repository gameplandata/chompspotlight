import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Page1() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/page1')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products:', error);
            });
    }, []);

    // Handler to navigate to Home Page
    const goToHomePage = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>Page 1</h1>
            <ul>
                {products.map(data => (
                    <li key={data.id}>{data.name} - {data.description}</li>
                ))}
            </ul>
            <button onClick={goToHomePage}>Go to HomePage</button>
        </div>
    );
}

export default Page1;
