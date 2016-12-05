import React, { Component } from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

export default class HelloComponent extends Component {
    render() {
        return (
            <Text style={styles.welcome}>
                Hello, {this.props.name}!
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 32,
        textAlign: 'center',
        color: '#fff',
        margin: 10,
    }
});
