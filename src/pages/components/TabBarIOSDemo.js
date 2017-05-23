/**
 * Created by mengqingdong on 2017/5/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TabBarIOS,
} from 'react-native';

export default class TabBarIOSDemo extends Component {

    static navigationOptions = {
        title: 'TabBarIOS',
    };

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title='tab1'
                    icon={require('../../imgs/icon1.png')}>
                        <View style={{flex:1,backgroundColor:'red'}}></View>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='tab2'>
                    <View style={{flex:1,backgroundColor:'blue'}}></View>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='tab3'>
                    <View style={{flex:1,backgroundColor:'green'}}></View>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}