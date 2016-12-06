/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import HelloComponent from './HelloComponent';
import Ticker from './Ticker';

export default class ReactNativeHelloWorld extends Component {
    static get defaultProps() {
        return {
            title: 'World'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <HelloComponent name={this.props.title} />
                <Ticker />

                <Button
                    onPress={this.props.onForward}
                    title='Next'
                    color='#841584'
                />

                <Button
                    onPress={this.props.onBack}
                    title='Previous'
                    color='#841584'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#9900cc',
    }
});
