import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Profile extends Component {
    static navigationOptions = {
        title: 'Profile'
    }
  render() {
    return (
      <View style={styles.container}>
        <Text> Profile </Text>
        <Button 
            style={{
                flex:1, paddingBottom:20
            }}
            title="Edit Profile" 
            onPress={()=>{this.props.navigation.navigate("EditProfile")}}
            />
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });