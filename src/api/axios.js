import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://task-list-back-vrsq.onrender.com/api'
})

export default instance