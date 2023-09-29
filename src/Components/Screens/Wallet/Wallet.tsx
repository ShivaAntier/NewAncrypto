import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, View, Text, Touchable, TouchableOpacity} from 'react-native';

function Wallet() {
  const [clicked, setClicked] = useState(false);
  const navigation: any = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: 'red', padding: 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image
              style={{backgroundColor: 'red', width: 20, height: 25}}
              source={require('../../../Images/WalletScreen/ProfileIcon.png')}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'black',
              borderRadius: 90,
            }}>
            <TouchableOpacity
              onPress={() => {
                setClicked(true);
                navigation.navigate('Wallet');
              }}
              style={{
                backgroundColor: clicked ? 'green' : 'black',
                borderRadius: 90,
                padding: 10,
              }}>
              <Text style={{padding: 5}}>Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setClicked(false);
                navigation.navigate('Nfts');
              }}
              style={{
                backgroundColor: clicked ? 'black' : 'green',
                borderRadius: 90,
                padding: 10,
              }}>
              <Text style={{padding: 5}}>NFT</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
          // onPress={() => navigation.navigate('Notifications')}
          >
            <Image
              style={{width: 20, height: 25}}
              source={require('../../../Images/WalletScreen/Notification.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{padding: 20, marginRight: -10}}>TeraPapa</Text>
            <Image
              style={{height: 10, width: 10}}
              source={require('../../../Images/WalletScreen/DownArrow.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor: 'red'}}></View>
    </View>
  );
}

export default Wallet;
