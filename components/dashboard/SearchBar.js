import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Keyboard } from 'react-native'
import { connect } from 'react-redux';
import { getInfo } from '../../store/actions/searchAction'

class SearchBar extends Component {
    state = {
        query: "",
        add:8,
        searcBarFocused: false
    }

    componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
    }
    
    keyboardDidShow = () => {
        this.setState({
            searcBarFocused: true
        })
    }

    keyboardWillShow = () => {
        this.setState({
            searcBarFocused: true
        })
    }

    keyboardWillHide = () => {
        this.setState({
            searcBarFocused: false
        })
    }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
            style={{ fontSize: 24, marginLeft: 15, flex: 1 }}
            placeholder="Search..."
            onChangeText={(text) => this.setState({ query: text},
                () => {
                    this.props.getInfo(this.state.query, this.state.add)})}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: '#c45653',
        justifyContent: 'center',
        paddingHorizontal: 5
    }

  });

const mapDispatchToProps = (dispatch) => {
    return {
        getInfo:(info, add) => dispatch(getInfo(info,add))
    }
}

export default connect(null,mapDispatchToProps)(SearchBar)