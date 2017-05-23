/**
 * Created by mengqingdong on 2017/4/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
} from 'react-native';

var ITEM_HEIGHT = 100;

export default class FlatListDemo extends Component {
    static navigationOptions = {
        title: 'FlatList',
    };
    _flatList;

    _renderItem = (item) => {
        var txt = '第' + item.index + '个' + ' title=' + item.item.title;
        var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        return <Text style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor},styles.txt]}>{txt}</Text>
    }

    _header = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是头部</Text>;
    }

    _footer = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是尾部</Text>;
    }

    _separator = () => {
        return <View style={{height:2,backgroundColor:'yellow'}}/>;
    }

    render() {
        var data = [];
        for (var i = 0; i < 10; i++) {
            data.push({key: i, title: i + ''});
        }

        return (
            <View style={{flex:1}}>
                <Button title='滚动到指定位置' onPress={()=>{
                    //this._flatList.scrollToEnd();
                    //this._flatList.scrollToIndex({viewPosition:0,index:8});
                    this._flatList.scrollToOffset({animated: true, offset: 2000});
                }}/>
                <View style={{flex:1}}>
                    <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        ListHeaderComponent={this._header}
                        ListFooterComponent={this._footer}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}

                        //numColumns ={3}
                        //columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}

                        //horizontal={true}

                        //getItemLayout={(data,index)=>(
                        //{length: ITEM_HEIGHT, offset: (ITEM_HEIGHT+2) * index, index}
                        //)}

                        //onEndReachedThreshold={5}
                        onEndReached={(info)=>{
                        console.warn(info.distanceFromEnd);
                        }}

                        //onViewableItemsChanged={(info)=>{
                        //console.warn(info);
                        //}}
                        data={data}>
                    </FlatList>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
});