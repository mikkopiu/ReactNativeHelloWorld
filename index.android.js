/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativeHelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello, World!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9900cc',
  },
  welcome: {
    fontSize: 32,
    textAlign: 'center',
    color: '#fff',
    margin: 10,
  }
});

AppRegistry.registerComponent('ReactNativeHelloWorld', () => ReactNativeHelloWorld);
