import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'
import { api } from "../../../services/axios.config";
import { userAuth, userRegister } from "../services/authService";
import axios from "axios";


interface AuthProps {
    authState?: { token: string | null; authenticated: boolean | null} 
    onRegister?: (email: string, password: string) => Promise<any>
    onLogin?: (EMAIL: string, Password: string) => Promise<any>
    onLogout?: () => Promise<any>
}

export const AuthContext = createContext<AuthProps>({})

export const useAuth = () => useContext(AuthContext)

