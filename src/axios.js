import axios from 'axios';

const api = axios.create({
    baseURL: 'https://portfolio-backend-zeta-ashy.vercel.app/api', 
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;