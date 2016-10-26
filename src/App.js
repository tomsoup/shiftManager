import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    // Inside redux app, we must provide at least one reducer
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
