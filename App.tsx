/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import Splash from './src/Components/Screens/Splash/Splash';
import Wallet from './src/Components/Screens/Wallet/Wallet';
import Account from './src/Components/Screens/Account/Account';
import Notifications from './src/Components/Screens/Notifications/Notifications';
import Nfts from './src/Components/Screens/Nfts/Nfts';


function App() {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Wallet' component={Wallet}/>
        <Stack.Screen name='Account' component={Account}/>
        <Stack.Screen name='Notifications' component={Notifications}/>
        <Stack.Screen name='Nfts' component={Nfts}/>



      </Stack.Navigator> 
    </NavigationContainer>
  )
}

export default App;
