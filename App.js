/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SplashScreen from './src/screens/Splashscreen';
import Home from './src/screens/Home';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Graph from './src/screens/Graph';


export default class App extends Component {
  render() {
    return (
    //  <SplashScreen />
    <AppNav />
    );
  }
}

const Stacker = createStackNavigator({
SplashScreen:{
  screen:SplashScreen
},
  Home:{
  screen:Home
},
Graph:{
  screen:Graph
}
},
{
  headerMode:"none",
  initialRouteName:"Home"
});

const AppNav = createAppContainer(Stacker)