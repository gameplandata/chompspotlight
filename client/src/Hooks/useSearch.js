import { useState } from 'react';
import axios from 'axios';

export const useSearch = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const search = async (searchText) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await axios.post('http://localhost:3001/search', {value: searchText})
            setIsLoading(false);
            if (response && response.data) {
                return response.data;
            } else {
                return null;
            }
        }
        catch(err) {
            setIsLoading(false)
            setError(err.response.data.error);
            return null;
        }
    }

    return { search, isLoading, error };
}