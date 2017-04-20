/**
 * Created by mengqingdong on 2017/4/20.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ToastAndroid,
} from 'react-native';

export default class TextDemo extends Component {

    render() {
        return (
            <View style={{flex:1,marginTop:30}}>

                <Text
                    numberOfLines={1}>
                    不会超过1行不会超过1行不会超过1行不会超过1行不会超过1行不会超过1行mqd
                </Text>

                <Text style={{backgroundColor:'red',height:50}} onLongPress={()=>{
                    ToastAndroid.show('onLongPress',ToastAndroid.SHORT);
                }}
                      onPress={()=>{
                    ToastAndroid.show('onPress',ToastAndroid.SHORT);
                }}>
                    长按或者点击
                </Text>
                <Text style={{height:50,fontStyle:'italic'}} selectable={false}>长按选中</Text>
                <Text style={{lineHeight:50,backgroundColor:'red',textAlign:'auto'}}>行高50</Text>
                <Text style={{lineHeight:50,color:'white',backgroundColor:'blue',textAlign:'auto',marginTop:20}}>
                    textAlign auto</Text>
                <Text style={{height:50,color:'white',backgroundColor:'blue',textAlign:'center',marginTop:20}}>
                    textAlign center</Text>
                <Text style={{height:50,color:'white',backgroundColor:'blue',textAlign:'left',marginTop:20}}>
                    textAlign left</Text>
                <Text style={{height:50,color:'white',backgroundColor:'blue',textAlign:'right',marginTop:20}}>
                    textAlign right</Text>
                <Text style={{textDecorationLine:'underline',textShadowColor:'red',textShadowOffset:{width: 2, height: 2}}}>textDecorationLine underline</Text>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    baseText: {
        color: 'red',
    },
    titleText: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
    },
})