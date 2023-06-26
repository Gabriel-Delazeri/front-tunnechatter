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
        'http://ec2-3-137-221-225.us-east-2.compute.amazonaws.com:8080/auth/signin', data
    )

    return {
        "user" : response.data.user,
        "token" : response.data.access_token
    };
}

export async function signUpRequest(data: SignUpRequestData) {
    const response = await axios.post(
        'http://ec2-3-137-221-225.us-east-2.compute.amazonaws.com:8080/auth/signup', data
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