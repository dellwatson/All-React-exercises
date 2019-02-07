import React, { Component } from 'react'
import { Text, View, Button, ActivityIndicator, StyleSheet, Image, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

class Dashboard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        title: 'Home',
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

  state = {
    data : [],
    page:1,
    isLoading: false
  }

  componentDidMount(){
    this.setState({
      isLoading:true
    }, this.getData)
  }

  getData = async () => {
    const url= 'https://jsonplaceholder.typicode.com/photos?_limit=10&_page='+this.state.page;
    fetch(url)
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          data: this.state.data.concat(resJson),
          isLoading: false
        })
      })
  }

  renderRow = ({ item }) => {
    return(
      <View style={styles.item}>
        <Image source={{uri:item.url}} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemText}>{item.id}</Text>
      </View>
    )
  }

  handleLoadMore = () => {
    this.setState({
      page: this.state.page +1,
      isLoading: true
    },
    this.getData
    )
  }

  renderFooter = () => {
    return (
      // this.state.isLoading ?
      <View style={styles.loader}>
       <ActivityIndicator size='large' />
      </View>
      // : null
    )
  }

  render() {
    return (
        <FlatList
          style={styles.container}
          data={this.state.data}
          renderItem={this.renderRow}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={this.renderFooter}
        />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  loader: {
    marginTop:10,
    alignItems: 'center'
  },
  item:{
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderWidth:1
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  itemText: {
    fontSize: 16
  },
});

export default Dashboard;
