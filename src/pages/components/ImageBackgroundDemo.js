/**
 * Created by 孟庆东 on 2017/8/4.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
} from 'react-native';

export default class ImageBackgroundDemo extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground style={{height:100,width:300}} source={require('../../imgs/s63.png')} resizeMode='cover'>
                    <Text style={{color:'red',fontSize:24}}> image 嵌入 text</Text>
                </ImageBackground>
            </View>
        );
    }
}