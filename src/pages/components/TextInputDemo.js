/**
 * Created by mengqingdong on 2017/4/24.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
} from 'react-native';

export default class TextInputDemo extends Component {
    static navigationOptions = {
        title: 'TextInput',
    };

    constructor(props) {
        super(props);
        this.state = {text: '123456'};
    }

    render() {
        return (
            <View>
                <TextInput style={{height:44}}
                           keyboardType='email-address'
                           //onFocus={()=>{this.setState({text: 'onFocus'});}}
                           //onBlur={()=>{this.setState({text: 'onBlur'});}}
                           onChangeText={(txt)=>{this.setState({text: txt});}}
                           onEndEditing={()=>{this.setState({text: 'onEndEditing'});}}
                           //selectTextOnFocus={true}
                           selection={{start:0,end:3}}
                           selectionColor='red'
                           value={this.state.text}/>

            </View>

        );
    }
}