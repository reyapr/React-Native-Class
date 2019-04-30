import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button
} from 'react-native';

class Profile extends Component<Props> {
  


  render() {
    console.log(this.props,`<========================= this.props =======================`);
    return (
      <View >
        <Button 
          title='INI HALAMAN PROFILE'
          onPress={() => this.props.navigation.navigate('Home')} 
        />
      </View>
      );
  }
}

export default Profile