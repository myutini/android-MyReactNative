
import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


import TodoApp from './src/TodoApp'
import store from './src/store'


export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <TodoApp/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})
