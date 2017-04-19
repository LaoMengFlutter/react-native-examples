/**
 * Created by mengqingdong on 2017/4/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Platform,
    View,
    TouchableOpacity,
    TouchableNativeFeedback,
} from 'react-native';

export default class XTouchable extends Component {

    _renderIOS = () => {
        var props = Object.assign({}, this.props);
        props.style = [styles.touchable, this.props.style];
        return (
            <TouchableOpacity

                {...props}>
                {this.props.children}
            </TouchableOpacity>
        );
    }
    _renderAndroid = () => {
        var props = Object.assign({}, this.props);
        props.style = [styles.touchable, this.props.style];
        return (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}
                {...props}>
                <View style={props.style}>
                    {this.props.children}
                </View>
            </TouchableNativeFeedback>
        );
    }

    render() {

        if (Platform.OS === 'ios') {
            return this._renderIOS();
        } else if (Platform.OS === 'android') {
            return this._renderAndroid();
        }
    }
}

const styles = StyleSheet.create({
        touchable: Platform.select({
            ios: {
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0C42FD'
            },
            android: {
                justifyContent: 'center',
                alignItems: 'center',
            }
        }),
    }
)