import axios from 'axios'
export const apiRequest = new axios.create({
    baseURL:process.env.BACKEND_URL,
    withCredentials:true
})