import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet, Image, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import SearchBar from './SearchBar'
import { connect } from 'react-redux';


class Search extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        header: <SearchBar />
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
    const info = this.props.query
    const url= `http://api.giphy.com/v1/gifs/search?q=${info}&api_key=5TUqp9G5hAZiuT7QPGfVHdMJ2hntCN6Z&limit=10`;
    fetch(url)
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          data: this.state.data.concat(resJson.data),
          isLoading: false
        })
      })
  }
  //dataImg.data.item.images.downsized.url

  renderRow = ({ item }) => {
    return(
      <View style={styles.item}>
        <Image source={{uri:item.images.downsized.url}} style={styles.itemImage} />
        {/* <Text style={styles.itemText}>{item.title}</Text> */}
        {/* <Text style={styles.itemText}>{item.id}</Text> */}
      </View>
    )
  }

  handleLoadMore = () => {
    this.setState({
      page: this.state.page +1,
      isLoading: true
    },
    // this.getData
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

const mapStateToProps = (state) => {
  return {
      query : state.show.info
  }
}

export default connect(mapStateToProps)(Search)
