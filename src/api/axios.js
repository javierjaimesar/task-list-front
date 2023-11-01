import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://18.226.169.0:3000/api',
    withCredentials: true
})

export default instance