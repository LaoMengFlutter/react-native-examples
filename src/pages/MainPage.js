/**
 * Created by mengqingdong on 2017/4/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    SectionList,
    Text,
} from 'react-native';
import ImageDemo from './components/ImageDemo'
import TouchableDemo from './components/TouchableDemo'
import XTouchableDemo from './mycomponents/XTouchableDemo'
import SectionListDemo from './components/SectionListDemo'
import FlatListDemo from './components/FlatListDemo'
import ScrollViewDemo from './components/ScrollViewDemo'
import SwitchDemo from './components/SwitchDemo'
import TextDemo from './components/TextDemo'
import ButtonDemo from './components/ButtonDemo'
import ActivityIndicatorDemo from './components/ActivityIndicatorDemo'


export default class MainPage extends Component {
    sections = [
        {
            key: 'Components', data: [
            {content: 'Image', component: ImageDemo},
            {content: 'Touchable', component: TouchableDemo},
            {content: 'SectionList', component: SectionListDemo},
            {content: 'FlatList', component: FlatListDemo},
            {content: 'ScrollView', component: ScrollViewDemo},
            {content: 'Switch', component: SwitchDemo},
            {content: 'Text', component: TextDemo},
            {content: 'Button', component: ButtonDemo},
            {content: 'ActivityIndicator', component: ActivityIndicatorDemo},
        ]
        },
        {
            key: '封装组件', data: [
            {content: 'XTouchable', component: XTouchableDemo},
        ]
        },
    ];

    _renderItem = (info) => {
        const {navigator} = this.props;
        var txt = info.item.content;
        return <Text
            style={styles.itemText} onPress={()=>{
                if(navigator){
                    navigator.push({component:info.item.component})
                }
            }}>{txt}</Text>
    }

    _sectionComp = (info) => {
        var txt = info.section.key;
        return <Text
            style={styles.sectionText}>{txt}</Text>
    }

    _separator = () => {
        return <View style={{height:1,backgroundColor:'black'}}/>;
    }

    render() {
        return (
            <View>
                <SectionList
                    renderSectionHeader={this._sectionComp}
                    renderItem={this._renderItem.bind(this)}
                    ItemSeparatorComponent={this._separator}
                    sections={this.sections}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sectionText: {
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 17,
        paddingLeft: 20,
        backgroundColor: 'blue',
        color: 'white'
    },
    itemText: {
        height: 50,
        textAlignVertical: 'center',
        fontSize: 13,
        paddingLeft: 20,
    }
})