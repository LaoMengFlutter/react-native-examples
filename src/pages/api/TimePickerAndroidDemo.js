/**
 * Created by 孟庆东 on 2017/8/4.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button,
    TimePickerAndroid,
    Alert,
} from 'react-native';

export default class TimePickerAndroidDemo extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Button title='时间对话框' onPress={()=>{
                    TimePickerAndroid.open(

                    ).then(({action, hour, minute})=>{
                        if(action !== TimePickerAndroid.dismissedAction){
                            Alert.alert(hour+':'+minute);
                        }
                    })
                }}/>
            </View>
        );
    }
}