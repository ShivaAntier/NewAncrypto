import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, StatusBar, StyleSheet, Text, View,useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";



function Splash(){
    const navigation: any = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Wallet')
        },2000)
    })
    const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle: any = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const textColor: any = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };
return(
    <View style={[backgroundStyle, style.container]}>
    <StatusBar backgroundColor={isDarkMode?Colors.lighter:Colors.darker}/>
        <Image style={style.logo} source={require('../../../Images/SplashIcon/splash.png')}/>
        <Text style={[textColor, style.text]}>AnCrypto</Text>
    </View>
)
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        height: 150,
        width: 150,
        resizeMode: 'contain',
    },
    text:{
        fontSize:40,
        fontWeight:'bold',
        // marginTop:-30
    }
})

export default Splash