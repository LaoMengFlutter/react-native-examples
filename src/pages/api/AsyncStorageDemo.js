/**
 * Created by mengqingdong on 2017/5/31.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    AsyncStorage,
    Button,
    Alert,
    Text,
    TextInput,
} from 'react-native';

export default class AsyncStorageDemo extends Component {

    static navigationOptions = {
        title: 'AppState'
    }

    state = {
        key:'',
        value:'',
        data: '\n',
    }

    _getAll = () => {
        this.setState({data: '\n'});
        AsyncStorage.getAllKeys((err,keys) => {
            if (keys && keys.length>0) {
                keys.map((key, index) => {
                    AsyncStorage.getItem(key, (err, result) => {
                        var msg = this.state.data+key + ': ' + result + '\n';
                        this.setState({data: msg});
                    })
                });
            }
        })
    }
    _add = () => {
        AsyncStorage.setItem(this.state.key, this.state.value, (error) => {
            if (error == null) {
                Alert.alert('保存成功');
            } else {
                Alert.alert('error');
            }
        })
    }

    _remove = ()=>{
        AsyncStorage.removeItem(this.state.key,(error)=>{
            if (error == null) {
                Alert.alert('删除成功');
            } else {
                Alert.alert('error');
            }
        })
    }
    render() {
        return (
            <View style={{flex:1}}>
                <TextInput style={{height:50,borderColor:'gray',borderWidth:1}} placeholder='key' onChangeText={(txt)=>{this.setState({key:txt})}} value={this.state.key}/>
                <TextInput style={{height:50,borderColor:'gray',borderWidth:1}} placeholder='value' onChangeText={(txt)=>{this.setState({value:txt})}} value={this.state.value}/>
                <Button title='ADD' onPress={this._add}/>
                <Button title='REMOVE' onPress={this._remove}/>
                <Button title='GET' onPress={this._getAll}/>
                <Text>data:{this.state.data}</Text>
            </View>
        );
    }
}