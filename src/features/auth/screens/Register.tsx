
import { StyleSheet, Text, View, Image, Dimensions, TextInput, KeyboardAvoidingView, Platform } from "react-native"
import imagePath from "../../../shared/utils/constant/imagePath"
import { RegisterForm } from "../components/RegisterForm"
import { useState } from "react"
import { useAuth } from "../context/authContext"
import React from "react"
import { Login } from "./Login"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        height: Dimensions.get('window').height/5,
        width: Dimensions.get('window').width/4,
        resizeMode: 'contain'
    },
    input: {
        height: 40,
        width: Dimensions.get('window').width/1.5,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8
    },
    loginForm: {
        alignContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginBottom: 40
    },
})

export const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { onLogin, onRegister } = useAuth()

    const login = async () => {
        const result = await onLogin!(email, password)
        if (result && result.error){
            alert(result.msg)
        }
    }

    const register = async () => {
        const result = await onRegister!(email, password)
        if (result && result.error){
            alert(result.msg)
        } else {
            Login()
        }
    }
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios'? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
            style={styles.container}
        > 
            <Image
                style={styles.imageStyle}
                source={imagePath.logoMark}
            />
            <RegisterForm/>
        </KeyboardAvoidingView>
    )
}
