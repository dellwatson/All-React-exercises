import React from 'react';
import AppNavigator from './components/navigator/AppNavigator'
import { AppRegistry } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

// AppRegistry.registerComponent('RN', () => App)
