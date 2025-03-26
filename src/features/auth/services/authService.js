import { axios } from "../../../services/axios.config"

export const userAuth = async (userData) => {
    const response = await axios.post('auth/login', userData, {
        headers: {
            'Content-Type' : 'application/json' 
        }
    })
    return response
}

export const userRegister = async (userData) => {
    const response = await axios.post('auth/register', userData, {
        headers: {
            'Content-Type' : 'application/json' 
        }
    })
    return response
}