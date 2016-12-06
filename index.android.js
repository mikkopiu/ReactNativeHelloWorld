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

import HelloComponent from './components/HelloComponent';
import Ticker from './components/Ticker';

export default class ReactNativeHelloWorld extends Component {
    render() {
        return (
        <View style={styles.container}>
            <HelloComponent name="You" />
            <HelloComponent name="Everyone" />
            <Ticker />
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
    }
});

AppRegistry.registerComponent('ReactNativeHelloWorld', () => ReactNativeHelloWorld);
