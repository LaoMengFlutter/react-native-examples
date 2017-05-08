/**
 * Created by mengqingdong on 2017/5/8.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Modal,
    Button,
    Alert,
} from 'react-native';

export default class ModalDemo extends Component {

    static navigationOptions = {
        title: 'Modal',
    };

    state = {
        visible: false,
        transparent: true,
    }

    render() {
        return (
            <View style={{flex:1}}>

                <Button title='显示Modal' onPress={()=>{this.setState({visible:true})}}/>
                <Modal
                    visible={this.state.visible}
                    transparent={this.state.transparent}
                    onRequestClose={()=>{
                        Alert.alert("Modal has been closed.");
                    }}
                    onShow={()=>{
                        Alert.alert("Modal has been show.");
                    }}>
                    <View
                        style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.3)'}}>
                        <View style={{height:200,width:275,backgroundColor:'white'}}>
                            <Button title='关闭Modal' onPress={()=>{this.setState({visible:false})}}/>
                            <Button title={this.state.transparent?'不透明':'透明'} onPress={()=>{this.setState({transparent:!this.state.transparent})}}/>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}