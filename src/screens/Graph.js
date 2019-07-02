import React, { Component } from 'react';
import { View, Text,Dimensions,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
  } from 'react-native-chart-kit'
import Header from './../components/Header';
import * as Animatable from 'react-native-animatable';
import Close from '../assets/Images/close.png';


export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      days:[],
      AnimatedValue:0,
      AnimatedText:"Breathe In",
      time:0
    };
  }

  TimeChange(){
    this.setState({
      time:this.state.time + 1
    })
  }

  componentDidMount(){
    setInterval(() => {
      this.TimeChange()
    },1000)
  }
   

  render() {
    return (
      <View style={{flex:1}}>
                <View style={{flex:1,justifyContent: 'center',alignItems: 'center',width:"100%"}}>
                  <View style={{width:"100%",alignItems: 'center',justifyContent: 'center',marginBottom:40}}>
                    <Text style={{fontSize:20,marginBottom:20}}>{this.state.time}</Text>
                    <View style={{borderRadius:200,width:250,height:250,backgroundColor: "rgba(133, 200, 234, 0.5)",alignItems: 'center',justifyContent: 'center',}}>
                      <View style={{borderRadius:100,width:100,height:100,backgroundColor: "#85C8EA",alignItems: 'center',justifyContent: 'center',}}>
                        <Animatable.View onTransitionEnd={() => {this.setState({AnimatedText:"Breathe Out"})}} onAnimationBegin={() => this.setState({AnimatedText:"Breathe In"})} iterationCount={100} duration={3000} iterationDelay={5000} animation="zoomIn" direction="alternate"  style={{borderRadius:150,width:250,height:250,backgroundColor: "#85C8EA",alignItems: 'center',justifyContent: 'center',}}>
                              <Text style={{color:"white"}}>{this.state.AnimatedText}</Text>
                        </Animatable.View>
                      </View>
                    </View>
                  </View>
                </View>   

                <View style={{width:"100%",alignItems: 'center',justifyContent: 'center',marginBottom:40}}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")} style={{borderRadius:100,width:60,height:60,backgroundColor: "#85C8EA",alignItems: 'center',justifyContent: 'center',}}>
                          <Image source={Close} style={{width:15,height:15}} />
                      </TouchableOpacity>
                </View>       
      </View>
    );
  }
}
