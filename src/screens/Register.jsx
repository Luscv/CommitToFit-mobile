
import { StyleSheet, Text, View, Image, Dimensions, TextInput, KeyboardAvoidingView, Platform } from "react-native"
import imagePath from "../utils/constant/imagePath"
import { ButtonComponent } from "../components/ButtonComponent"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
        gap: 20
    },
})

export const Register = () => {
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
            <View style={styles.loginForm}>
                <View>
                    <Text style={{alignSelf:'center', fontSize: 15, color: '#564269', paddingBottom: 15}}>Faça o seu cadastro:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor='#1b1b1b'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor='#1b1b1b'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Repita a senha"
                        placeholderTextColor='#1b1b1b'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Data de nascimento"
                        placeholderTextColor='#1b1b1b'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Objetivo"
                        placeholderTextColor='#1b1b1b'
                    />
                </View>
                <ButtonComponent
                    primary
                    action='Criar conta'
                />
            </View>
        </KeyboardAvoidingView>
    )
}
