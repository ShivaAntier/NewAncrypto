/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import Splash from './src/Components/Screens/Splash/Splash';
import Wallet from './src/Components/Screens/Wallet/Wallet';
import Account from './src/Components/Screens/Account/Account';
import Notifications from './src/Components/Screens/Notifications/Notifications';
import Nfts from './src/Components/Screens/Nfts/Nfts';
import Browser from './src/Components/Screens/Browser/Browser';
import Chat from './src/Components/Screens/Chat/Chat';
import Swap from './src/Components/Screens/Swap/Swap';
import BottomTabs from './src/Components/Common/BottomTabs/BottomTabs';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Wallet" component={BottomTabs} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Nfts" component={Nfts} />
        <Stack.Screen name="Browser" component={Browser} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Swap" component={Swap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
