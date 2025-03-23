import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
import imagePath from '../utils/constant/imagePath';


const styles = StyleSheet.create({
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
    return (
        <>
            <Text style={styles.title}>
                Bem vindo!
            </Text>
            <Image
                style={styles.imageStyle}
                source={imagePath.logoImage}
            />
            <View style={styles.buttons}>
                <ButtonComponent action='Login' primary/>
                <ButtonComponent action='Register' secondary/>
            </View>
        </> 
    )
}