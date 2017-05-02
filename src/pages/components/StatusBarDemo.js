/**
 * Created by mengqingdong on 2017/4/27.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Text,
    TouchableHighlight,
} from 'react-native';

function getValue<T>(values: Array<T>, index: number): T {
    return values[index % values.length];
}


export default class StatusBarDemo extends Component {

    static navigationOptions = {
        title: 'StatusBar',
        header: {
        }
    };

    state = {
        animated: true,
        hidden: false,
    }


    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar
                    backgroundColor='#ff0000'
                    networkActivityIndicatorVisible={true}
                    barStyle='dark-content'
                    //hidden={true}
                    //translucent={true}
                />

            </View>
        );
    }
}


var styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        borderRadius: 5,
        backgroundColor: '#eeeeee',
        padding: 10,
    },
    title: {
        marginTop: 16,
        marginBottom: 8,
        fontWeight: 'bold',
    }
});