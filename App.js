import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import { Welcome } from './src/screens/welcome'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Login } from './src/screens/Login';
import { Register } from './src/screens/Register';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
          <Stack.Screen  name='Welcome' component={Welcome} />
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Register' component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}