import { StyleSheet, TouchableHighlight, Text, Dimensions } from "react-native"

const styles = StyleSheet.create({
    button: {
        fontSize: 20,
        padding: 10, 
        textAlign: 'center',
        overflow: 'hidden',
        borderWidth: 2,
        borderRadius: '8%',
        width: Dimensions.get('window').width / 2.5 ,
        fontWeight: 'bold'
    },
    primary: {
        backgroundColor: '#564269',
        color: '#fafafa',
        borderColor: '#564269',
    },
    secondary: {
        borderColor: '#564269',
        color: '#564269'
    }
})

export const ButtonComponent = (props) => {
    const stylesButton = [styles.button]
    if(props.primary) stylesButton.push(styles.primary)
    if(props.secondary) stylesButton.push(styles.secondary)
    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.action}</Text>
        </TouchableHighlight>

    )
}