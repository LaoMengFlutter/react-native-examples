/**
 * Created by mengqingdong on 2017/5/23.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ActionSheetIOS,
    Button,
    Alert,
} from 'react-native';

export default class ActionSheetIOSDemo extends Component {

    static navigationOptions = {
        title: 'ActionSheetIOS',
    };

    _onPress = ()=>{
        ActionSheetIOS.showActionSheetWithOptions({
            options:['option1','option2','取消','删除'],
            cancelButtonIndex:2,
            destructiveButtonIndex:3,
            title:'title',
            message:'message',
        },(index)=>{
            Alert.alert('选中：'+index);
        })
    }

    _onPress1 = ()=>{
        ActionSheetIOS.showShareActionSheetWithOptions({
            message:'message',
            url:'http://blog.csdn.net/mengks1987',
            subject:'subject',
            title:'title',
            message:'message',
        },()=>{

        },()=>{

        })
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Button title='弹出' onPress={this._onPress}/>
                <Button title='弹出分享' onPress={this._onPress1}/>
            </View>
        );
    }
}