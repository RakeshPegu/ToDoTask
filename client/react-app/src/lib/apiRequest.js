import axios from 'axios'
export const apiRequest = new axios.create({
    baseURL:'http://localhost:5000/api/v1',
    withCredentials:true
})
