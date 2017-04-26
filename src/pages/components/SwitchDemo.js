/**
 * Created by mengqingdong on 2017/4/20.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Switch,
    Text,
    Button,
} from 'react-native';

export default class SwitchDemo extends Component {
    static navigationOptions = {
        title: 'Switch',
    };
    state = {
        value: false,
        disabled: false,
        changeTxt:'切换Switch',
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',paddingLeft:20}}>
                    <Button title={this.state.value?'关闭':'打开'}
                            onPress={()=>{this.setState({value:!this.state.value});}}></Button>
                    <Switch style={{marginLeft:20}} value={this.state.value} onTintColor='red' tintColor='blue'
                            thumbTintColor='black'/>
                </View>

                <View style={{flexDirection:'row',paddingLeft:20,marginTop:20}}>
                    <Button title={this.state.disabled?'启用':'禁用'}
                            onPress={()=>{this.setState({disabled:!this.state.disabled});}}></Button>
                    <Switch style={{marginLeft:20}} value={true} disabled={this.state.disabled}/>
                </View>

                <View style={{flexDirection:'row',paddingLeft:20,marginTop:20}}>
                    <Text>{this.state.changeTxt}</Text>
                    <Switch value={this.state.value} onValueChange={(value)=>{
                        this.setState({
                            value:value,
                            changeTxt:value?'switch 打开了':'switch 关闭了'
                        });


                    }}/>
                </View>

            </View>
        );
    }
}