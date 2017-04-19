/**
 * Created by mengqingdong on 2017/4/19.
 */
import React, {Component} from 'react';
import {
    Navigator,
} from 'react-native';

import MainPage from './pages/MainPage'

export default class App extends Component {

    _renderScene(route, navigator) {
        let Component = route.component;
        return <Component route={route} navigator={navigator}/>
    }

    render() {
        return (
            <Navigator
                initialRoute={{component:MainPage}}
                renderScene={this._renderScene.bind(this)}/>
        );
    }
}