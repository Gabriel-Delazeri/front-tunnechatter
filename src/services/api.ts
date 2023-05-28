import axios from "axios";
import { parseCookies } from "nookies";

const { 'nextauth.token': token } = parseCookies()

export const api = axios.create({
    baseURL: 'http://0.0.0.0:8080'
})

if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
}