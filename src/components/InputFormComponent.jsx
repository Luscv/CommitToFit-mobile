import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        marginBottom: 25,
    },
    input: {
        height: 40,
        width: Dimensions.get('window').width/1.5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8
    },
})

export const InputForm = (props) => {
    return(
        <View style={styles.container}>
            <Text style={{alignSelf: 'baseline', paddingBottom: 4, fontSize: 16}}>{props.label}</Text>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                placeholderTextColor='#1b1b1b'
            />
        </View>    
    )
}