import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class SignUpScreen extends Component {
  render() {
    return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> REGISTER </Text>
        <Button 
            style={{
                flex:1, paddingBottom:20
            }}
            title="dashboard" 
            onPress={()=>{this.props.navigation.navigate("Home")}}
            />
    </View>
    )
  }
}
