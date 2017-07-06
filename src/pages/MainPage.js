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



export default class MainPage extends Component {
    static navigationOptions = {
        title: 'Main',
    };
    sections = [
        {
            key:'API',data:[
            {content: 'AsyncStorage',},
            {content: 'AppState',},
            {content: 'Animated',},
            {content: 'ActionSheetIOS',},
            {content: 'AdSupportIOS',},
            {content: 'Alert',},
        ],
        },
        {

            key: 'Components', data: [
            {content: 'ViewPagerAndroid',},
            {content: 'ToolbarAndroid',},
            {content: 'TabBarIOS',},
            {content: 'SegmentedControlIOS',},
            {content: 'RefreshControl',},
            {content: 'ProgressBarAndroid',},
            {content: 'Picker',},
            {content: 'Modal',},
            {content: 'KeyboardAvoidingView',},
            {content: 'DrawerLayoutAndroid',},
            {content: 'DatePickerIOS',},
            {content: 'StatusBar',},
            {content: 'Slider',},
            {content: 'Image',},
            {content: 'Touchable',},
            {content: 'SectionList',},
            {content: 'FlatList',},
            {content: 'ScrollView', },
            {content: 'Switch', },
            {content: 'Text', },
            {content: 'Button',},
            {content: 'ActivityIndicator',},
            {content: 'Navigators',},
            {content: 'TextInput',},
        ]
        },
        {
            key: '封装组件', data: [
            {content: 'XTouchable',},
        ]
        },
    ];

    _renderItem = (info) => {
        const {navigate} = this.props.navigation;
        var txt = info.item.content;
        return <Text
            style={styles.itemText} onPress={()=>{
                if(navigate){
                    navigate(info.item.content);
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