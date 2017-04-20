/**
 * Created by mengqingdong on 2017/4/20.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TextInput,
    ToastAndroid,
    Button,
} from 'react-native';


export default class ScrollViewDemo extends Component {

    state = {
        data:['第1个', '第2个', '第3个', '第4个', '第5个', '第6个', '第7个', '第8个', '第9个', '第10个'],
    }

    _scroll;

    render() {
        return (
            <View style={{flex:1}}>
                <Button title='切换数据' onPress={()=>{
                    this.setState({
                        data:['第11个', '第12个', '第13个', '第14个', '第15个', '第16个', '第17个', '第18个', '第19个', '第20个','第21个'],
                    });
                }}></Button>
                <Button  title='滚动到y：100的位置' onPress={()=>{
                    this._scroll.scrollTo({y:100});
                }}/>
                <Button  title='滚动到末尾' onPress={()=>{
                    this._scroll.scrollToEnd();
                }}/>
                <ScrollView
                    ref={(scroll)=>this._scroll = scroll}
                    style={{borderColor:'red',borderWidth:2}}
                    contentContainerStyle={{paddingLeft:20,paddingTop:20,paddingRight:20}}
                    keyboardDismissMode='on-drag'
                    keyboardShouldPersistTaps='never'
                    showsVerticalScrollIndicator={true}
                    scrollEnabled={true}
                    pagingEnabled={true}
                    horizontal={false}
                    onContentSizeChange={(contentWidth, contentHeight)=>{
                        var msg = 'onContentSizeChange:'+contentWidth+','+contentHeight;
                        ToastAndroid.show(msg,ToastAndroid.SHORT);
                    }}
                    onScroll={(e)=>{
                    console.warn('onScroll');
                }}>
                    <Text style={{height:50,backgroundColor:'black',color:'white'}}>悬浮在顶部</Text>
                    <TextInput />

                    {
                        this.state.data.map((item, index) => {
                            var color = index * 23 + 10;
                            return <Text style={[styles.text,{backgroundColor:color}]}>{item}</Text>
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        height: 200,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'red',
        fontSize: 30
    }
})