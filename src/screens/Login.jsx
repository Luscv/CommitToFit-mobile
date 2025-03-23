import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
})

export const Login = () => {
    return(
        <View style={styles.container}> 
            <Text>
                Login aqui!
            </Text>
        </View>
    )
}