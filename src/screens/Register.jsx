import { Text, StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
})

export const Register = () => {
    return(
        <View style={styles.container}> 
            <Text>
                Registro aqui!
            </Text>
        </View>
    )
}