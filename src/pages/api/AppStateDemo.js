/**
 * Created by mengqingdong on 2017/5/31.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    AppState,
} from 'react-native';

export default class AppStateDemo extends Component {

    static navigationOptions = {
        title: 'AppState'
    }

    state = {
        currentAppState:AppState.currentState,
    }

    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }
    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }
    _handleAppStateChange = (nextAppState) => {
        this.setState({currentAppState: nextAppState});
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Text>当前 state 是: {this.state.currentAppState}</Text>
            </View>
        );
    }
}