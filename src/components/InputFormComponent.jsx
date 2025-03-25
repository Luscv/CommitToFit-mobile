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
        borderRadius: 8,
        borderColor: '#564269'   
    },
})

export const InputForm = (props) => {
    return(
        <View style={styles.container}>
            <Text style={{alignSelf: 'baseline', paddingBottom: 4, fontSize: 16, color: '#564269'}}>{props.label}</Text>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                placeholderTextColor='#8c8c8c'
                onBlur={props.onBlur}
                onChangeText={props.onChange}
                value={props.value}
            />
            {props.error && (<Text style={{color:'#ff0000'}}>{props.error.message}</Text>)}
        </View>    
    )
}