import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

 class Profile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        title: 'ProfileX',
        headerLeft: (
            <Ionicons
                name="md-menu"
                onPress={()=> navigation.openDrawer()}
                size={30}
                style={{ paddingLeft: 10 }}
            />
        )
    }
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

  export default Profile;
