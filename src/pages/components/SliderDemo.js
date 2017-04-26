/**
 * Created by mengqingdong on 2017/4/26.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Slider,
    Text,
} from 'react-native';

export default class SliderDemo extends Component {

    static navigationOptions = {
        title: 'Slider',
    };

    state = {
        value:0,
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Slider />
                <Slider disabled={true}/>
                <Slider maximumTrackTintColor='red' minimumTrackTintColor='black'/>
                <Slider style={{borderWidth:1,borderColor:'red'}}/>
                <Text>{this.state.value}</Text>
                <Slider onValueChange={(value)=>{this.setState({value:value})}} onSlidingComplete={(value)=>{this.setState({value:value})}}/>
                <Slider step={0.2}/>
                <Slider thumbImage={require('../../imgs/slider_thumb.png')}/>
                <Slider value={0.5}/>
            </View>
        );
    }
}