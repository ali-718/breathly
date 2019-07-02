import React from 'react'
import { View, Text,Image } from 'react-native'
import Splash from '../assets/Images/Splash.png';

const Header = () => {
    return (
        <View style={{width:"100%",height:100,alignItems: 'center',justifyContent: 'center'}}>
            <Image source={Splash} style={{width:300,height:250}} />
        </View>
    )
}

export default Header
