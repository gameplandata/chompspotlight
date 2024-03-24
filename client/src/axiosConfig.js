import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:3001' });

// Inject the JWT token into the headers of every request
axiosInstance.interceptors.request.use((req) => {
    const userDetails = localStorage.getItem('user');
    if (userDetails) {
        const token = JSON.parse(userDetails).token;
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default axiosInstance;
