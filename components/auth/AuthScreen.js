import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class AuthScreen extends Component {
  render() {
    return (
      <View style={{flex:1 ,alignItems: 'center', justifyContent: 'center'}}>
         <Button
            style={{
                flex:1, paddingBottom:20
            }}
            title="Login"
            onPress={()=>{this.props.navigation.navigate("Login")}}
            />
         <Button
            title="SignUp"
            onPress={()=>{this.props.navigation.navigate("SignUp")}}
            />
      </View>
    )
  }
}
