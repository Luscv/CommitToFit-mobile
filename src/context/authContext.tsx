import { createContext, useContext, useState } from "react";
import React from 'react'
import { api } from "../services/axios.config";
import { userAuth, userRegister } from "../features/auth/services/authService";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

interface AuthProps {
    authState?: { token: string | null; authenticated: boolean | null} 
    onRegister?: (email: string, password: string) => Promise<any>
    onLogin?: (EMAIL: string, Password: string) => Promise<any>
    onLogout?: () => Promise<any>
}

const TOKEN_KEY = 'JWT-TOKEN'
const AuthContext = createContext<AuthProps>({})

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}: any) => {
    const [authState, setAuthState] = useState<{
        token: string | null
        authenticated: boolean | null
    }>({
        token: null,
        authenticated: null
    })

    const register = async (email: string, password: string) => {
        try {
            return await userRegister({email, password})
        } catch (e) {
            return { error: true, msg: (e as any).response.data.msg}
        }
    }

    const login = async (email: string, password: string) => {
        try {
            const result = await userAuth({email, password})
            console.log('login result:', result)

            setAuthState({
                token: result.data.token,
                authenticated: true
            })

            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`

            await SecureStore.setItemAsync(TOKEN_KEY, result.data.token)

            return result
        } catch (e) {
            return { error: true, msg: (e as any).response.data.msg}
        }
    }

    const logout = async () => {
        await SecureStore.deleteItemAsync(TOKEN_KEY)

        axios.defaults.headers.common['Authorization'] = ''

        setAuthState({
            token: null,
            authenticated: false
        })
    }

    const value = {
        onRegister: register
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}