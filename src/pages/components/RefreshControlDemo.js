/**
 * Created by mengqingdong on 2017/5/17.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    RefreshControl,
} from 'react-native';

export default class RefreshControlDemo extends Component {
    static navigationOptions = {
        title: 'RefreshControl',

    };

    state = {
        loaded:0,
        isRefreshing: false,
        data: Array.from(new Array(20)).map((val, i) => ({text: '初始化： ' + i, clicks: 0})),
    }

    _onRefresh = () => {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            // prepend 10 items
            const rowData = Array.from(new Array(10))
                .map((val, i) => ({
                    text: '第几次加载： ' + (+this.state.loaded + i),
                    clicks: 0,
                }))
                .concat(this.state.data);

            this.setState({
                loaded: this.state.loaded + 10,
                isRefreshing: false,
                data: rowData,
            });
        }, 3000);
    }

    render() {

        return (
            <ScrollView
                style={{flex:1}}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this._onRefresh}
                    tintColor="#ff0000"
                    title="Loading..."
                    titleColor="#00ff00"
                    size={0}
                    progressViewOffset={30}
                    colors={['#0000ff','#ff0000', '#00ff00', ]}
                    progressBackgroundColor="#ffff00"
                  />
                }>
                <View>
                    {
                        this.state.data.map((row, ii) => {
                            return (<Text>{row.text}</Text>);
                        })
                    }
                </View>
            </ScrollView>
        );
    }
}