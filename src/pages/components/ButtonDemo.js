/**
 * Created by mengqingdong on 2017/4/20.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button,
    ToastAndroid,
} from 'react-native';

export default class ButtonDemo extends Component {
    static navigationOptions = {
        title: 'Button',
    };
    render() {
        return (
            <View style={{flex:1,marginTop:30}}>
                <Button title='默认Button'/>
                <Button title='color设置为红色' color='red' />
                <Button title='禁用' disabled={true} onPress={()=>{
                    ToastAndroid.show('点我了');
                }}/>
                <Button title='点我' onPress={()=>{
                    ToastAndroid.show('点我了',ToastAndroid.SHORT);
                }}/>
            </View>
        );
    }
}