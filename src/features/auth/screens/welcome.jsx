import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { ButtonComponent } from '../../../shared/components/ButtonComponent'
import imagePath from '../../../shared/utils/constant/imagePath'
import { useNavigation } from '@react-navigation/native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    title:{
        fontSize: 40,
        color: '#564269',
    },
    buttons: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    imageStyle: {
        height: Dimensions.get('window').height/4,
        width: Dimensions.get('window').width,
        resizeMode: 'contain'
    }
})

export const Welcome = () => {
    const navigation = useNavigation()

    const handleLogin = () => {
        navigation.navigate('Login')
    }

    const handleRegistration = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Bem vindo!
            </Text>
            <Image
                style={styles.imageStyle}
                source={imagePath.logoImage}
            />
            <View style={styles.buttons}>
                <ButtonComponent action='Login' primary onPress={handleLogin}/>
                <ButtonComponent action='Register' secondary onPress={handleRegistration}/>
            </View>
        </View> 
    )
}