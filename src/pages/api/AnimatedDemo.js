/**
 * Created by mengqingdong on 2017/5/26.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Button,
    Animated,
    Alert,
} from 'react-native';

export default class AnimatedDemo extends Component {

    static navigationOptions = {
        title: 'Animated'
    }

    state = {
        animatedValue: new Animated.Value(0),
        decayValue: new Animated.Value(0),
        left:new Animated.Value(0),
    }
    _beforeValue = 0;
    _startAnimated = (type) => {
        this.state.animatedValue.setValue(0);
        if ('timing' === type) {
            Animated.timing(
                this.state.animatedValue,
                {
                    toValue: 1,
                    duration: 2000,
                },
            ).start();
        } else if ('spring' === type) {
            Animated.spring(
                this.state.animatedValue,
                {
                    toValue: 1,
                    duration: 2000,
                },
            ).start();
        } else if ('decay' === type) {
            Animated.decay(
                this.state.decayValue,
                {
                    velocity: 2,
                    deceleration:0.992,
                },
            ).start(() => {

            });

        }
        this.state.decayValue.addListener((callback) => {
            var n = callback.value - this._beforeValue;
            this._beforeValue = callback.value;
            console.log(callback.value+'----'+n);
        })
    }

    _translateAni = ()=>{
        this.state.left.setValue(0);
        Animated.timing(
            this.state.left,
            {
                toValue: 300,
                duration: 1000,
            },
        ).start();
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Button title='平移' onPress={()=>{this._translateAni()}}/>
                <Animated.View
                    style={{width:50,height:100,backgroundColor:'blue',left:this.state.left}}>

                </Animated.View>

                <View style={{flexDirection:'row'}}>
                    <View>
                        <Button title='开始动画：timing' onPress={()=>{this._startAnimated('timing')}}/>
                        <Button title='开始动画：spring' onPress={()=>{this._startAnimated('spring')}}/>
                        <Button title='开始动画：decay' onPress={()=>{this._startAnimated('decay')}}/>
                    </View>

                    <Animated.View
                        style={{width:200,height:100,backgroundColor:'red',
                        transform:[
                            {translateY:this.state.animatedValue.interpolate({
                                inputRange:[0,1],
                                outputRange:[0,100]
                            })},
                        ]}}>

                    </Animated.View>

                </View>

                <Animated.View
                    style={{width:200,height:100,backgroundColor:'blue',
                        transform:[
                            {translateY:this.state.decayValue},
                        ]}}>

                </Animated.View>
            </View>
        );
    }
}