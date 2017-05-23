/**
 * Created by mengqingdong on 2017/5/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    SegmentedControlIOS,
    Alert,
} from 'react-native';

export default class SegmentedControlIOSDemo extends Component {

    static navigationOptions = {
        title: 'SegmentedControlIOS',
    };
    _onChange = (event)=>{
        var s = 'onChange参数属性:selectedSegmentIndex：'+
            event.nativeEvent.selectedSegmentIndex+'\n'+
            'target:'+event.nativeEvent.target+'\n'+
                'value:'+event.nativeEvent.value;
        Alert.alert(s);
    }

    onValueChange = (value)=>{
        Alert.alert('onValueChange:'+value);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <SegmentedControlIOS
                    //enabled={false}
                    selectedIndex={1}
                    //momentary={true}
                    onChange={this._onChange}
                    onValueChange={this.onValueChange}
                    tintColor='red'
                    values={['第1个','第2个','第3个','第4个']}/>
            </View>
        );
    }
}