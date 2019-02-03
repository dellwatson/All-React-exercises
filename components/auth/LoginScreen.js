import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class LoginScreen extends Component {
  render() {
    console.log("nice")
    console.log(this.props.state)
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> LOGIN SCREEN HEY</Text>
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
