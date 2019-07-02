import React, { Component } from 'react'
import { Text, View,TouchableOpacity,ScrollView,ToastAndroid,Image } from 'react-native'
import Header from '../components/Header';
import VerticalSlider from 'rn-vertical-slider';
import { ToolbarAndroid } from 'react-native-gesture-handler';
import Play from '../assets/Images/play.png';



var i = 0;

export default class Home extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1,justifyContent: 'center',alignItems: 'center',width:"100%"}}>
                    <Header />
                </View>

              
                    <View style={{width:"100%",alignItems: 'center',justifyContent: 'center',marginBottom:40}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Graph")} style={{borderRadius:100,width:60,height:60,backgroundColor: "#85C8EA",alignItems: 'center',justifyContent: 'center',}}>
                            <Image source={Play} style={{width:15,height:15}} />
                         </TouchableOpacity>
                    </View>
            </View>
        )
    }
}
