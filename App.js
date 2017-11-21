/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddelware, combineRedusers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import InputUser from './src/components/input/InputUser';
import Main from './src/components/main/Main';
import Login from './src/components/login/Login';
import Avatar from './src/components/avatar/Avatar';
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      
        <InputUser />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
