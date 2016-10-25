import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

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
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
