import { View, Text, StyleSheet } from "react-native"
import { InputForm } from "./InputFormComponent"
import { ButtonComponent } from "./ButtonComponent"
import { useForm, Controller  } from "react-hook-form"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    loginForm: {
        alignContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginBottom: 40
    },
})

export const RegisterForm = () => {
    const {control, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
            <View style={styles.loginForm}>
                <View>
                    <Text style={{alignSelf:'center', fontSize: 20, color: '#564269', paddingBottom: 15}}>Faça o seu cadastro:</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: 'Email é obrigatório',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Email inválido'
                            }
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <InputForm
                                label='Digite seu email:'
                                placeholder='Email'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={errors.email?.message}
                        />
                        )}
                        name="email"
                    
                    />
                        
                    <InputForm
                        label='Digite sua senha:'
                        placeholder='Senha'
                    />
                    <InputForm
                        label='Confirme a senha:'
                        placeholder='Repita a senha'
                    />
                    <InputForm
                        label='Data de nascimento:'
                        placeholder='DD/MM/YYYY'
                    />
                    <InputForm
                        label='Qual o seu Objetivo:'
                        placeholder='Objetivos, metas...'
                    />
                </View>
                
            </View>
            <ButtonComponent
                primary
                action='Criar conta'
                onClick={handleSubmit(onSubmit)}
            />
        </>
    )
}