import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

class Settings extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        title: 'Settings',
        headerLeft: (
          <Ionicons
              name="md-menu"
              onPress={()=> navigation.openDrawer()}
              size={30}
              style={{ paddingLeft: 10 }}
          />
        ),
    }
}
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.item}>
          <Image source={{uri:"https://media3.giphy.com/media/CN6I3osA8ih5m/giphy-downsized_s.gif"}} style={styles.itemImage} />
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  item:{
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderWidth:1
  },
  itemImage: {
    width: '100%',
    height: '100%',
    // resizeMode: 'cover'
  },
  // itemText: {
  //   fontSize: 16
  // },
});

export default Settings;
