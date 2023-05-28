import axios from 'axios';

type SignInRequestData = {
    "username": string;
    "password": string;
}

export async function signInRequest(data: SignInRequestData) {
    const response = await axios.post(
        'http://0.0.0.0:8080/auth/signin', data
    )

    console.log(response)

    return {
        "user" : response.data,
        "token" : response.data.accessToken
    };
}

export async function recoverUserInformation() {    
    const response = await axios.post(
        'http://0.0.0.0:8080/auth/signin', {
            username: "",
            password: ""
          }
    )

    return {
        "user" : response.data,
    };
}