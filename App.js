import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SocialIcon } from 'react-native-elements';
import Home from './Screens/Home';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }} initialRouteName="Login">
    
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} /> 
      <Stack.Screen name="Home" component={Home}/>

  
    </Stack.Navigator>
    </NavigationContainer>
      </NativeBaseProvider>
  )
}

export default App
