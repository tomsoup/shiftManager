import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyBpEZdHgQf6iTw8Xtt89zN0pFCca2NMueM',
    authDomain: 'manager-54598.firebaseapp.com',
    databaseURL: 'https://manager-54598.firebaseio.com',
    storageBucket: '',
    messagingSenderId: '443494029225'
  };
    firebase.initializeApp(config);
  }
  render() {
    // Inside redux app, we must provide at least one reducer
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello World!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
