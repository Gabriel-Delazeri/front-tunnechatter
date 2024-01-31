import axios from 'axios';
import { api } from './api';

type SignInRequestData = {
    "username": string;
    "password": string;
}

type SignUpRequestData = {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}

export async function signInRequest(data: SignInRequestData) {
    const response = await axios.post(
        'http://localhost:8080/api/auth/login', data
    )

    return {
        "user" : response.data.user,
        "token" : response.data.token
    };
}

export async function signUpRequest(data: SignUpRequestData) {
    const response = await axios.post(
        'http://localhost:8080/api/auth/register', data
    )
    
    return {
        "user" : response.data.user,
        "token" : response.data.token
    };
}

export async function recoverUserInformation(token : String) {   
    const response = await api.get('/users/data')

    return {
        "user" : response.data,
    };
}