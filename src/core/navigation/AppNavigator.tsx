import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native'
import { Home } from "../../features/auth/screens/Home";
import { Button } from "react-native";
import { Welcome } from "../../features/auth/screens/welcome";
import { Login } from "../../features/auth/screens/Login";
import { Register } from "../../features/auth/screens/Register";
import { useAuth } from "../../features/auth/context/authContext";

const Stack = createNativeStackNavigator()

export const AuthStack = () => {
    const {authState, onLogout } = useAuth()
    return (
        <NavigationContainer>
            <Stack.Navigator id={undefined} screenOptions={{
                headerShown: false
            }}>
                { authState?.authenticated ? (
                <Stack.Screen name='Home' component={Home}
                    options={{
                    headerRight: () => <Button onPress={onLogout} title='Sign Out'/>
                    }}
                />
                ): (
                <>
                    <Stack.Screen  name='Welcome' component={Welcome} />
                    <Stack.Screen name='Login' component={Login}/>
                    <Stack.Screen name='Register' component={Register}/>
                </>
                )}
                
                
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}