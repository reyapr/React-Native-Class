/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TextInput
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Profile from './Profile'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  constructor(){
    super()
    this.state ={
      email:'email 1 565345 7675765765',
      password:''
    }
  }


  render() {
    return (
      <View style={[styles.box, styles.container]}>
       
        <View style={[styles.box, styles.header]} ></View>
        <View style={styles.body} >
        
          <Text>{this.state.email}</Text>
          <Text>{this.state.email}</Text>
          <Text>{this.state.email}</Text>
          <Text>{this.state.email}</Text>
          <Text>{this.state.email}</Text>
          <Text>{this.state.email}</Text>
          <Text>{this.state.email}</Text>
          <Text>{this.state.email}</Text>
        
        </View>
        <View style={styles.footer} ></View>
        {/* <Text style={styles.welcome}>Login</Text> */}
        {/* <View style={{borderWidth: 1}}>
          <TextInput
            style={{height: 40, width: '70%', borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
          />
          <TextInput
            style={{height: 40, width: '70%', borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box:{
    flex: 1
  },
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'blue',
    flexDirection:'row'
  },
  header:{
    backgroundColor: 'red'
  },
  body:{
    flex: 10,
    backgroundColor: 'green',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  footer:{
    flex: 0.5,
    backgroundColor: 'yellow'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


const MyNavigation = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: () => ({
      title: 'My Home'
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
    }
  }
},{
  initialRouteName: 'Profile'
})

export default createAppContainer(MyNavigation)
