import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Wallet from '../../Screens/Wallet/Wallet';
import Browser from '../../Screens/Browser/Browser';
import Swap from '../../Screens/Swap/Swap';
import Chat from '../../Screens/Chat/Chat';

const Tab = createBottomTabNavigator();
function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Browser" component={Browser} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Swap" component={Swap} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
