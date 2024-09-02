import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://shailkas-blog-api.onrender.com/api"
}) ;