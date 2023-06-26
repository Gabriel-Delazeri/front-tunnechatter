import axios from "axios";
import { parseCookies } from "nookies";

const { 'tunechatter.token': token } = parseCookies()

export const api = axios.create({
    baseURL: 'http://0.0.0.0:8080/api'
})

if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
}