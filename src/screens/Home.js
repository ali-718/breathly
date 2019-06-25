import React, { Component } from 'react'
import { Text, View,TouchableOpacity,ScrollView,ToastAndroid } from 'react-native'
import Header from '../components/Header';
import VerticalSlider from 'rn-vertical-slider';
import { ToolbarAndroid } from 'react-native-gesture-handler';


var i = 0;

export default class Home extends Component {
    state={
        value:0,
        minValue:0,
        days:['','Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    }

    saveValue = () => {
        i += 1
        
        if(i == 8){
            return i = 0
        }
        const stressDay = this.state.days[i];
        fetch('https://breathly-bf15.restdb.io/rest/breathly',{
            method:"POST",
            headers:{
                'cache-control': 'no-cache',
                'x-apikey': '5b1dc1523d7ef11872176c16ffd5424d4d9b6',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                day:stressDay,
                breathly:this.state.value
            })
        }).then(res => {console.log(res);alert(`Successfully added stress level check your graph`)}).catch(e => console.log(e))
    }

    render() {
        return (
            <ScrollView style={{flex:1}}>
                <Header />
                
                <View style={{marginTop:40,width:"100%",alignItems: 'center',}}>
                    <Text style={{fontSize:22,color:"#85C8EA",fontWeight:"bold"}}>Your Today Stress Level</Text>
                </View>
                
                <View style={{flex:1,alignItems: 'center',marginTop:40}}>
                    <VerticalSlider
                    value={this.state.minValue}
                    disabled={false}
                    min={0}
                    max={100}
                    onChange={(value) => {
                        this.setState({minValue:value})
                    }}
                    onComplete={(value) => {
                        this.setState({value})
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
                    <View style={{width:"100%",alignItems: 'center',justifyContent: 'center',marginTop:40}}>
                        <TouchableOpacity onPress={this.saveValue} style={{elevation:5,width:"60%",height:40,backgroundColor: "#85C8EA",alignItems: 'center',justifyContent: 'center',}}>
                            <Text style={{color:"white"}}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("Graph")}} style={{elevation:5,width:"60%",height:40,backgroundColor: "#85C8EA",alignItems: 'center',justifyContent: 'center',marginTop:20}}>
                            <Text style={{color:"white"}}>Show Graph</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
