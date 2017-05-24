/**
 * Created by mengqingdong on 2017/5/23.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ToolbarAndroid,
} from 'react-native';

export default class ToolbarAndroidDemo extends Component {

    static navigationOptions = {
        title: 'ToolbarAndroid',
    };

    _onActionSelected = (position) => {
        if (position === 0) {

        }
    }

    render() {
        return (
            <ToolbarAndroid
                style={{height:55,backgroundColor:'red'}}
                logo={require('../../imgs/icon1.png')}
                title='TITLE'
                actions={[{title: 'Settings', icon: require('../../imgs/back.png'), show: 'always'}]}
                onActionSelected={this._onActionSelected}
                contentInsetEnd={25}
                contentInsetStart={25}
                navIcon={require('../../imgs/icon1.png')}/>
        );
    }
}