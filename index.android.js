/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';

import HelloScene from './components/HelloScene';

export default class ReactNativeHelloWorld extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title: 'You', index: 0 }}
                renderScene={(route, navigator) => 
                    <HelloScene
                        title={route.title}
                        onForward={() => {
                            const nextInd = route.index + 1;
                            navigator.push({
                                title: Math.random() >= 0.5 ? 'Everyone' : 'You',
                                index: nextInd
                            });
                        }}

                        onBack={() => {
                            if (route.index > 0) {
                                navigator.pop();
                            }
                        }}
                    />
                }
            />
        );
    }
}

AppRegistry.registerComponent('ReactNativeHelloWorld', () => ReactNativeHelloWorld);
