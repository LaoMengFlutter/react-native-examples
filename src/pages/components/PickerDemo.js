/**
 * Created by mengqingdong on 2017/5/17.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Picker,
    Text,
} from 'react-native';

export default class PickerDemo extends Component {

    static navigationOptions = {
        title: 'Picker',
    };

    state = {
        language:'java',
        position:0,
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Text>value:{this.state.language}----position:{this.state.position}</Text>
                <Picker
                    style={{backgroundColor:'red'}}
                    itemStyle={{color:'blue'}}
                    prompt='Picker'
                    mode = 'dropdown'
                    selectedValue={this.state.language}
                    onValueChange={(lang,position) => this.setState({language: lang,position:position})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="Net" value="net" />
                    <Picker.Item label="ReactNative" value="rn" />
                    <Picker.Item label="c#" value="c" />
                    <Picker.Item label="php" value="php" />
                </Picker>
            </View>
        );
    }
}