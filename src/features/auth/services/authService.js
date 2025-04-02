import { api } from "../../../services/axios.config"

export const userAuth = async (userData) => {
    console.log('chamou', userData)
    const response = await api.post('auth/login', userData, {
        headers: {
            'Content-Type' : 'application/json' 
        }
    })
    
    return response
}

export const userRegister = async (userData) => {
    const response = await api.post('auth/register', userData, {
        headers: {
            'Content-Type' : 'application/json' 
        }
    })
    return response
}