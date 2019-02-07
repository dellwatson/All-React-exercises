import React from 'react';
import AppNavigator from './components/navigator/AppNavigator'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducer/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

// AppRegistry.registerComponent('RN', () => App)
