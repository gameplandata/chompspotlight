import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (firstName, lastName, email, username, password, retypedPassword, type, sport) => {
        setIsLoading(true)
        setError(null)

        axios.post('http://localhost:3001/signup', { firstName: firstName, lastName: lastName, email: email, username: username, password: password, retypedPassword: retypedPassword, type: type, sport: sport })
        .then(response => {
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch({type: 'LOGIN', payload: response.data})
        })
        .catch(err => {
            setIsLoading(false)
            setError(err.response.data.error);
        });
    }

    return { signup, isLoading, error };
}