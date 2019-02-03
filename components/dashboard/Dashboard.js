import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

export default class Dashboard extends Component {
    static navigationOptions = {
      title: 'Dashboard'
  }
  render() {
    return (
        <View style={styles.container}>
            <Text> DASHBOARD </Text>
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
