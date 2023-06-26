import axios from "axios";
import { parseCookies } from "nookies";

const { 'tunechatter.token': token } = parseCookies()

export const api = axios.create({
    baseURL: 'http://ec2-3-137-221-225.us-east-2.compute.amazonaws.com:8080/api'
})

if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
}