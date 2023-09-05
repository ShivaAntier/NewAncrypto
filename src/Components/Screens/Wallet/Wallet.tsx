import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View, Text, Touchable, TouchableOpacity } from "react-native";

function Wallet() {
    const navigation: any = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: "red", padding: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                        <Image style={{ backgroundColor: 'red', width: 20, height: 25 }} source={require('../../../Images/WalletScreen/ProfileIcon.png')} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
                            <Text style={{ padding: 5 }}>Wallet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Nfts')}>
                            <Text>NFT</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                        <Image style={{ width: 20, height: 25 }} source={require('../../../Images/WalletScreen/Notification.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: 'red' }}>
            </View>
        </View>)
}

export default Wallet;