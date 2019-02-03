import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class EditProfile extends Component {
    static navigationOptions = {
        title: 'Edit Profile'
    }
  render() {
    return (
      <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Edit Profile </Text>
      </View>
    )
  }
}
