import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    Text
} from 'react-native';

const TOUCH_AREA_WIDTH_MIN = 25;
const TOUCH_AREA_WIDTH_MAX = 250;

export default class TouchArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            touchPosX: 0,
            touchPosY: 0
        };
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPressOut={event => {
                    this.setState({
                        touchPosX: event.nativeEvent.locationX,
                        touchPosY: event.nativeEvent.locationY
                    });
                }}
            >
                <View style={styles.container}>
                    <View style={this.getTouchAreaStyle()} />
                </View>
            </TouchableWithoutFeedback>
        );
    }

    getTouchAreaStyle() {
        const size = this.getRandomAreaSize();
        return {
            width: size,
            height: size,
            left: this.state.touchPosX - (size / 2),
            top: this.state.touchPosY - (size / 2),
            backgroundColor: this.getRandomColour()
        };
    }

    getRandomColour() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    getRandomAreaSize() {
        let size = Math.random() * TOUCH_AREA_WIDTH_MAX;
        if (size < TOUCH_AREA_WIDTH_MIN) {
            return TOUCH_AREA_WIDTH_MIN;
        }
        return size;
    }
}

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: 250,
        backgroundColor: '#FFF'
    }
});
