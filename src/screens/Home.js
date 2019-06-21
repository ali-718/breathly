import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from '../components/Header';
import VerticalSlider from 'rn-vertical-slider';

export default class Home extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Header />
                
                <View style={{marginTop:40,width:"100%",alignItems: 'center',}}>
                    <Text style={{fontSize:22,color:"#85C8EA",fontWeight:"bold"}}>Your Today Stress Level</Text>
                </View>
                
                <View style={{flex:1,alignItems: 'center',marginTop:40}}>
                    <VerticalSlider
                    value={1}
                    disabled={false}
                    min={0}
                    max={100}
                    onChange={(value) => {
                        console.log("CHANGE", value);
                    }}
                    onComplete={(value) => {
                        console.log("COMPLETE", value);
                    }}
                    width={50}
                    height={200}
                    step={1}
                    borderRadius={5}
                    minimumTrackTintColor={"tomato"}
                    maximumTrackTintColor={"#85C8EA"}
                    showBallIndicator
                    ballIndicatorColor={"tomato"}
                    ballIndicatorTextColor={"white"}
                    />
                </View>
            </View>
        )
    }
}
