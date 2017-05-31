/**
 * Created by mengqingdong on 2017/5/24.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button,
    Alert,
} from 'react-native';

export default class AlertDemo extends Component {

    static navigationOptions = {
        title: 'Alert'
    }

    _alert = () => {
        // Alert.alert('title');
        // Alert.alert('title','Message');
        Alert.alert('Alert Title', 'Alert  Message',
            [
                {
                    text: '稍后再说', onPress: () => {
                    Alert.alert('', '点击了稍后再说')
                }
                },
                {
                    text: '取消', style: 'cancel', onPress: () => {
                    Alert.alert('', '点击了取消')
                },
                },
                {
                    text: '确定', onPress: () => {
                    Alert.alert('', '点击了确定')
                }
                },
                {
                    text: '确定1', onPress: () => {
                    Alert.alert('', '点击了确定')
                }
                },


            ],
            {cancelable: false},
        );
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Button title='Alert' onPress={this._alert}/>
            </View>
        );
    }
}