import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native"
import { ButtonComponent } from "../../../shared/components/ButtonComponent"
import { useForm, Controller  } from "react-hook-form"
import { useState } from "react"
import  Icon  from "react-native-vector-icons/Ionicons"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        alignItems: 'flex-start',
        marginBottom: 15,
        height: 75,
        width: Dimensions.get('window').width/1.5,
    },
    iconContainer: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    input: {
        height: 40,
        width: Dimensions.get('window').width/1.5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderColor: '#564269'   
    },
    loginForm: {
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
})

export const RegisterForm = () => {
    const {control, handleSubmit, formState: {errors}, watch} = useForm()
    const senha = watch('senha')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false)

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
            <View style={styles.loginForm}>
                <View>
                    <Text style={{alignSelf:'center', fontSize: 20, color: '#564269', paddingBottom: 15}}>Faça o seu cadastro:</Text>
                    
                    <View style={styles.inputContainer}>
                        <Text style={{alignSelf: 'baseline', paddingBottom: 4, fontSize: 16, color: '#564269'}}>Digite seu email: <Text style={{color: '#fc0000'}}>*</Text></Text>
                        <Controller
                            control={control}
                            rules={{
                                required: 'Email é obrigatório',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Email inválido'
                                }
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <TextInput
                                    style={styles.input}
                                    placeholder='Email'
                                    placeholderTextColor='#8c8c8c'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    inputMode="email"
                                />
                            )}
                            name="email"
                        
                        />
                        {errors.email && (<Text style={{color:'#ff0000'}}>{errors.email.message}</Text>)}
                    </View>
                        
                    <View style={styles.inputContainer}>
                        <Text style={{alignSelf: 'baseline', paddingBottom: 4, fontSize: 16, color: '#564269'}}>Escolha sua senha: <Text style={{color: '#fc0000'}}>*</Text></Text>
                        <Controller
                            control={control}
                            rules={{
                                required: 'Senha é obrigatória',
                                minLength: {
                                    value: 8,
                                    message: 'Mínimo 8 caracteres'
                                }
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <View style={{position: 'relative'}}>
                                    <TextInput
                                        secureTextEntry={!passwordVisible}
                                        style={styles.input}
                                        placeholder='Senha'
                                        placeholderTextColor='#8c8c8c'
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                    <TouchableOpacity style={styles.iconContainer}>
                                        <Icon
                                            name={passwordVisible ? 'eye-off' : 'eye'}
                                            size={20}
                                            color='#564269'
                                            onPress={() => setPasswordVisible(!passwordVisible)}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                            name="senha"
                        
                        />
                        {errors.senha && (<Text style={{color:'#ff0000'}}>{errors.senha.message}</Text>)}
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={{alignSelf: 'baseline', paddingBottom: 4, fontSize: 16, color: '#564269'}}>Repita sua senha:</Text>
                        <Controller
                            control={control}
                            rules={{
                                required: 'Confirme a senha',
                                validate: (value) => value === senha || 'Senhas não coincidem'
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <View style={{position: 'relative'}}>
                                    <TextInput
                                        secureTextEntry={!repeatPasswordVisible}
                                        readOnly={!senha}
                                        style={styles.input}
                                        placeholder='Repita a senha'
                                        placeholderTextColor='#8c8c8c'
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={!!senha ? value : ''}
                                    />
                                    <TouchableOpacity style={styles.iconContainer}>
                                        <Icon
                                            name={repeatPasswordVisible ? 'eye-off' : 'eye'}
                                            size={20}
                                            color='#564269'
                                            onPress={() => setRepeatPasswordVisible(!repeatPasswordVisible)}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                            name="confirmarSenha"
                        
                        />
                        {errors.confirmarSenha && (<Text style={{color:'#ff0000'}}>{errors.confirmarSenha.message}</Text>)}
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={{alignSelf: 'baseline', paddingBottom: 4, fontSize: 16, color: '#564269'}}>Data de nascimento: <Text style={{color: '#fc0000'}}>*</Text></Text>
                        <Controller
                            control={control}
                            rules={{
                                required: 'Data de nascimento é obrigatória',
                                pattern: {
                                    value: /^\d{2}\/\d{2}\/\d{4}$/,
                                    message: 'Use o formato DD/MM/YYYY'
                                }
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <TextInput
                                    style={styles.input}
                                    placeholder='DD/MM/YYYY'
                                    placeholderTextColor='#8c8c8c'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    textContentType="birthdate"
                                />
                            )}
                            name="dataNascimento"
                        
                        />
                        {errors.dataNascimento && (<Text style={{color:'#ff0000'}}>{errors.dataNascimento.message}</Text>)}
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={{alignSelf: 'baseline', paddingBottom: 4, fontSize: 16, color: '#564269'}}>Qual seu objetivo:</Text>
                        <Controller
                            control={control}
                            rules={{
                                
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <TextInput
                                    style={styles.input}
                                    placeholder='objetivos, metas...'
                                    placeholderTextColor='#8c8c8c'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="objetivo"
                        
                        />
                        {errors.objetivo && (<Text style={{color:'#ff0000'}}>{errors.objetivo.message}</Text>)}
                    </View>
                </View>  
            </View>
            <ButtonComponent
                primary
                action='Criar conta'
                onPress={handleSubmit(onSubmit)}
            />
        </>
    )
}