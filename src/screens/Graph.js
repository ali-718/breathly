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


export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      days:[]
    };
  }

  componentWillMount(){
    fetch('https://breathly-bf15.restdb.io/rest/breathly',{
      method:"GET",
      headers:{
        'cache-control': 'no-cache',
        'x-apikey': '5b1dc1523d7ef11872176c16ffd5424d4d9b6' 
      }
    }).then(res => res.json()).then(resJson => {this.setState({data:resJson.map(item => item.breathly),days:resJson.map(item => item.day)})}).catch(e => console.log(e))
  }

  render() {
    return (
      <ScrollView style={{flex:1}}>
          <Header />
            
            {/* Sales Chart */}
            
            <View style={{width:"100%",alignItems: 'center',marginTop:30}}>
                <Text style={{color:"#3DA5F4",fontWeight:"bold",fontSize:20,marginBottom:20}}>Stress Level</Text>
                {console.log(this.state.data)}
               
               {
                 this.state.data.length == 0 ? <Text>Loading</Text> :
               <LineChart
                    data={{
                    labels: this.state.days,
                    datasets: [{
                        data: this.state.data
                    }]
                    }}
                    width={Dimensions.get('window').width - 45} // from react-native
                    height={220}
                    chartConfig={{
                    backgroundColor: '#85C8EA',
                    backgroundGradientFrom: '#3DA5F4',
                    backgroundGradientTo: '#3DA5F4',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                    }}
                    bezier
                    style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    color:"white"
                    }}
                />}
                </View>
                
                {/* Sales chart end */}
                
    
      </ScrollView>
    );
  }
}
