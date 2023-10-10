import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.REACT_APP_BACKEND_URL,
    headers: {
        // Authorization: `${process.env.REACT_APP_API_KEY}`,
    },
});