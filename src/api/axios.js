import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://task-list-back-vrsq.onrender.com/api',
    withCredentials: true
})

export default instance