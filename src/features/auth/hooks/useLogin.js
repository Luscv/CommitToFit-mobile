import { useEffect } from "react"
import { userAuth } from "../services/authService"

export const useLogin = () => {
    const loginAuth = async () => {
        const res = await userAuth()
        return res
    }

    useEffect(() => {
        loginAuth()
    }, [])

    
    return {
        loginAuth
    }
}