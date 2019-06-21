import React, { Component } from 'react'
import { Text, View,Animated,Image, Dimensions } from 'react-native'
import Splash from '../assets/Images/Splash.png';

export default class SplashScreen extends Component{

    state = {
        animation : new Animated.Value(1)
    }

    static navigationOptions = {
        drawerLabel : () => null
    }

    componentDidMount()
    {
        setTimeout(() => {
            this.Animation()            
        }, 2000);

    }

    Animation = () => {
        Animated.timing(this.state.animation,{
            toValue:2,
            duration:1000
        }).start(
            () => {
                this.props.navigation.navigate("Home")
            }
        )
    }


  render() {

    const TranslationY = this.state.animation.interpolate({
        inputRange:[1,2],
        outputRange:[0,-Dimensions.get('window').height]
    })

    const animatedStyle={
           transform: [
               {
               translateY:TranslationY,
           },
        ]
    }

    return (
      <View style={{flex:1,justifyContent: 'center', alignItems: 'center',backgroundColor: "#FCFCFD",width:"100%"}}>
        <Animated.View style={[animatedStyle,{height:200}]}>
            <Image source={Splash} style={[{width:200,height:100}]}  />
        </Animated.View>
      </View>
    )
  }
}
