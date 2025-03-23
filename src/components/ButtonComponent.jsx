import { useRef } from "react"
import { StyleSheet, TouchableHighlight, Text, Dimensions, Animated } from "react-native"

const styles = StyleSheet.create({
    container:{
        overflow: 'hidden',
        alignSelf: 'center',
        
    },
    buttonContainer: {
        padding: 10,
        borderWidth: 2,
        width: Dimensions.get('window').width / 2.5 , 
        borderRadius: 8,
        borderColor: '#564269'  
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    primaryContainer: {
        backgroundColor: '#564269',
        
    },
    primaryText: {
        color: '#fafafa',
    },
    secondaryContainer: {
        backgroundColor: 'transparent'
    },
    secondaryText: {
        color: '#564269'
    }
})

export const ButtonComponent = (props) => {
    const scaleValue = useRef(new Animated.Value(1)).current

    const animateButton = (toValue) => {
        Animated.spring(scaleValue, {
            toValue,
            useNativeDriver: true, 
        }).start()
    }

    const handlePressIn = () => animateButton(0.95)
    const handlePressOut = () => animateButton(1)

    const containerStyles = [styles.buttonContainer]
    const textStyles = [styles.buttonText]

    if(props.primary){
        containerStyles.push(styles.primaryContainer)
        textStyles.push(styles.primaryText)
    }
    if(props.secondary){
        containerStyles.push(styles.secondaryContainer)
        textStyles.push(styles.secondaryText)
    }

    return(
        <TouchableHighlight 
            onPress={props.onClick} 
            onPressIn={handlePressIn} 
            onPressOut={handlePressOut} 
            underlayColor='transparent' 
            style={styles.container}
        >
            <Animated.View style={[
                containerStyles,
                {
                    transform: [{scale: scaleValue}]
                }
            ]}>
                <Text style={textStyles}>{props.action}</Text>
            </Animated.View>
        </TouchableHighlight>
    )
}