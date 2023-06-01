import { createContext, useEffect, useState } from 'react'
import { recoverUserInformation, signInRequest, signUpRequest } from '../services/auth';
import Router from 'next/router';

import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { api } from '../services/api';

type AuthContextType = {
    isAuthenticated : boolean;
    user: User;
    signIn: (data: SignInData) => Promise<void>
    logout: () => void
    signUp: (data: SignUpData) => Promise<void>
}

type SignInData = {
    username: string;
    password: string;
}

type SignUpData = {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}

type User = {
    username: string;
    email: string;
}


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
    const [user, setUser] = useState<User | null>(null)

    const isAuthenticated = false;

    useEffect(() => {
        const { 'tunechatter.token': token } = parseCookies()

        if (token) {
            const user = recoverUserInformation(token).then(
                (response) =>  {
                    setUser(response.user)
                }
            )
        }
    }, [])

    async function signIn({username, password}: SignInData) {
        const { token, user } = await signInRequest({
            username,
            password
        })

        setCookie(undefined, 'tunechatter.token', token, {
            maxAge: 60 * 60 * 1 // 1 hour
        })

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        setUser(user)

        Router.push('/')
    }

    async function signUp({username, email, first_name, last_name, password}: SignUpData) {
        const { token, user } = await signUpRequest({
            username, email, first_name, last_name, password
        })

        setCookie(undefined, 'tunechatter.token', token, {
            maxAge: 60 * 60 * 1 // 1 hour
        })

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        setUser(user)

        Router.push('/')
    }

    function logout() {
        destroyCookie(null, 'tunechatter.token')
        Router.reload()
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, logout, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}