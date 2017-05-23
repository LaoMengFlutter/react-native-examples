/**
 * Created by mengqingdong on 2017/5/17.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ProgressBarAndroid,
    Text,
    Button,
} from 'react-native';

export default class ProgressBarAndroidDemo extends Component {
    static navigationOptions = {
        title: 'ProgressBarAndroid',
    };

    componentDidMount() {
        setInterval(() => {
            if (this.state.progress >= 1) {
                this.setState({progress: 0})
            } else {
                this.setState({progress: this.state.progress + 0.1})
            }

        }, 500)
    }

    state = {
        color: 'red',
        indeterminate: true,
        progress: 0,
        styleAttr: 'Large',
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text>设置color：</Text>
                    <Button title='red' onPress={()=>{this.setState({color:'red'})}}/>
                    <Button title='blue' onPress={()=>{this.setState({color:'blue'})}}/>
                </View>

                <ProgressBarAndroid
                    indeterminate={false}
                    color={this.state.color}
                    progress={this.state.progress}
                    styleAttr='Horizontal'/>


                <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                    <Text>Horizontal</Text>
                    <ProgressBarAndroid
                        styleAttr='Horizontal'/>

                </View>

                <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                    <Text>Small</Text>
                    <ProgressBarAndroid
                        styleAttr='Small'/>

                </View>

                <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                    <Text>Large</Text>
                    <ProgressBarAndroid
                        styleAttr='Large'/>

                </View>

                <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                    <Text>Inverse</Text>
                    <ProgressBarAndroid
                        styleAttr='Inverse'/>

                </View>

                <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                    <Text>SmallInverse</Text>
                    <ProgressBarAndroid
                        styleAttr='SmallInverse'/>

                </View>

                <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                    <Text>LargeInverse</Text>
                    <ProgressBarAndroid
                        styleAttr='LargeInverse'/>

                </View>
            </View>
        );
    }
}