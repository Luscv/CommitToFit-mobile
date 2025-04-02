import axios from "axios"
import { useEffect, useState } from "react"
import { userAuth, userRegister } from "../features/auth/services/authService"
import { AuthContext } from "../features/auth/context/authContext"
import * as SecureStore from 'expo-secure-store'

const TOKEN_KEY = 'JWT-TOKEN'

export const AuthProvider = ({children}: any) => {
    const [authState, setAuthState] = useState<{
        token: string | null
        authenticated: boolean | null
    }>({
        token: null,
        authenticated: null
    })

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY)
            console.log('stored:', token)

            if(token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

                setAuthState({
                    token: token,
                    authenticated: true
                })
            }

        }
        loadToken()
    }, [])

    const register = async (email: string, password: string) => {
        try {
            return await userRegister({email, password})
        } catch (e) {
            return { error: true, msg: (e as any).response.data.msg}
        }
    }

    const login = async (email: string, password: string) => {
        try {
            console.log('login result:')
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
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}