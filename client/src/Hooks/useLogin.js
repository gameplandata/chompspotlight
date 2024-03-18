import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (username, password) => {
        setIsLoading(true)
        setError(null)

        axios.post('http://localhost:3001/login', {username: username, password: password})
        .then(response => {
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch({type: 'LOGIN', payload: response.data})
        })
        .catch(err => {
            setIsLoading(false)
            setError(err.response.data.error);
        });
    }

    return { login, isLoading, error };
}