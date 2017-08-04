/**
 * Created by 孟庆东 on 2017/8/4.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button,
    Vibration,
} from 'react-native';

export default class VibrationDemo extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Button title='震动' onPress={()=>{Vibration.vibrate([0, 500, 1000, 500],true)}}/>
                <Button title='取消' onPress={()=>{Vibration.cancel()}}/>
            </View>
        );
    }
}