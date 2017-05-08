/**
 * Created by mengqingdong on 2017/4/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Text,
    Button,
} from 'react-native';

export default class ImageDemo extends Component {
    static navigationOptions = {
        title: 'Image',
    };
    state={
        resizeMode:'cover'
    }
    render() {
        return (
            <ScrollView>
                <View>
                    <Image source={require('../../imgs/s99.png')}/>
                    <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                        <Text>设置resizeMode：</Text>
                        <Button title='cover' onPress={()=>{this.setState({resizeMode:'cover'})}}/>
                        <Button title='contain' onPress={()=>{this.setState({resizeMode:'contain'})}}/>
                        <Button title='stretch' onPress={()=>{this.setState({resizeMode:'stretch'})}}/>
                        <Button title='repeat' onPress={()=>{this.setState({resizeMode:'repeat'})}}/>
                        <Button title='center' onPress={()=>{this.setState({resizeMode:'center'})}}/>
                    </View>
                    <Image style={{height:100,width:100}} source={require('../../imgs/s63.png')} resizeMode={this.state.resizeMode}/>

                    <Image style={{height:100,width:100,opacity:0.5}} source={require('../../imgs/s63.png')} />

                    <Image style={{height:100,width:100}} source={require('../../imgs/s63.png')} blurRadius={30}/>

                    <Image  source={{uri: 'http://h5.86.cc/walls/20141217/mid_23b73a6904487a6.jpg'}} />

                </View>
            </ScrollView>

        );
    }
}