/**
 * Created by mengqingdong on 2017/4/27.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Text,
    Button,
    TouchableHighlight,
} from 'react-native';

function getValue<T>(values: Array<T>, index: number): T {
    return values[index % values.length];
}


export default class StatusBarDemo extends Component {

    static navigationOptions = {
        title: 'StatusBar',
        header: {
            //style:{backgroundColor: 'black',},
        }
    };

    state = {
        animated: true,
        hidden: false,
        backgroundColor:'white',
        translucent:false,
        barStyle:'default',
        networkActivityIndicatorVisible:false,
        showHideTransition:'fade',
    }


    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar
                    animated={this.state.animated}
                    hidden={this.state.hidden}
                    backgroundColor={this.state.backgroundColor}
                    translucent={this.state.translucent}
                    barStyle={this.state.barStyle}
                    networkActivityIndicatorVisible={this.state.networkActivityIndicatorVisible}
                    showHideTransition={this.state.showHideTransition}
                />
                <Button title={this.state.animated?'禁用动画':'使用动画'} onPress={()=>{this.setState({animated:!this.state.animated})}}/>
                <Button title={this.state.hidden?'显示':'隐藏'} onPress={()=>{this.setState({hidden:!this.state.hidden})}}/>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text>设置背景色：</Text>
                    <Button title='红色' onPress={()=>{this.setState({backgroundColor:'red'})}}/>
                    <Button title='蓝色' onPress={()=>{this.setState({backgroundColor:'blue'})}}/>
                    <Button title='半透明' onPress={()=>{this.setState({backgroundColor:'#80000000'})}}/>
                </View>
                <Button title={this.state.translucent?'不透明':'透明'} onPress={()=>{this.setState({translucent:!this.state.translucent})}}/>
                <Button title={this.state.networkActivityIndicatorVisible?'隐藏网络':'显示网络'} onPress={()=>{this.setState({networkActivityIndicatorVisible:!this.state.networkActivityIndicatorVisible})}}/>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text>设置样式：</Text>
                    <Button title='default' onPress={()=>{this.setState({barStyle:'default'})}}/>
                    <Button title='light-content' onPress={()=>{this.setState({barStyle:'light-content'})}}/>
                    <Button title='dark-content' onPress={()=>{this.setState({barStyle:'dark-content'})}}/>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text>显示或隐藏动画效果：</Text>
                    <Button title='fade' onPress={()=>{this.setState({showHideTransition:'fade'})}}/>
                    <Button title='slide' onPress={()=>{this.setState({showHideTransition:'slide'})}}/>
                </View>
            </View>
        );
    }
}


