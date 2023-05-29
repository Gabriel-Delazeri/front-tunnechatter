import axios from 'axios';
import { api } from './api';

type SignInRequestData = {
    "username": string;
    "password": string;
}

export async function signInRequest(data: SignInRequestData) {
    const response = await axios.post(
        'http://0.0.0.0:8080/auth/signin', data
    )

    return {
        "user" : response.data.user,
        "token" : response.data.access_token
    };
}

export async function recoverUserInformation(token : String) {   
    const response = await api.get('/users/data')

    return {
        "user" : response.data,
    };
}