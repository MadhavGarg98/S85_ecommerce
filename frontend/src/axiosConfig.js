// src/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://s85-ecommerce.onrender.com', // deployed server
    withCredentials: true, // crucial for sending cookies
});

export default instance;
