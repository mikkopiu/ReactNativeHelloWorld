import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

export default class Ticker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tick: 0
        };

        this.interval = setInterval(() => {
            this.setState({tick: this.state.tick + 1});
        }, 1000);
    }

    render() {
        return (
            <Text style={styles.tickText}>
                {this.state.tick}
            </Text>
        );
    }

    incrementTick() {
        this.setState({tick: this.state.tick++});
    }
}

const styles = StyleSheet.create({
    tickText: {
        fontSize: 64,
        textAlign: 'center',
        color: '#00eecc'
    }
});
