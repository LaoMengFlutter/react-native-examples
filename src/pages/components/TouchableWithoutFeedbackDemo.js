/**
 * Created by mengqingdong on 2017/4/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Text,
    Platform,
    Image,
} from 'react-native';

export default class TouchableWithoutFeedbackDemo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title} numberOfLines={1}>TouchableWithoutFeedbackDemo</Text>
                    <Image style={styles.backImg} source={require('../../imgs/back.png')}/>
                </View>

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerContainer: Platform.select({
        ios: {
            height: 74,
            paddingTop:30,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor:'#cccccc',
            borderBottomWidth:1,
            backgroundColor:'#161616',
        },
        android: {
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor:'#cccccc',
            borderBottomWidth:1,
            backgroundColor:'#161616',
        },
    }),

    title: {
        color:'white',
        fontSize: 17,
        paddingLeft:100,
        paddingRight:100,
    },

    backImg:{
        width: 20,
        height: 20,
        position:'absolute',
        left:0,
    }

})