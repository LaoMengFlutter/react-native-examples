/**
 * Created by mengqingdong on 2017/4/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Text,
    Platform,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native';

export default class TouchableDemo extends Component {

    render() {
        const {navigator} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title} numberOfLines={1}>TouchableDemo</Text>
                    <TouchableOpacity
                        style={styles.touchable}
                        onPress={()=>{
                            navigator.pop();
                        }}>
                        <Image style={styles.backImg} source={require('../../imgs/back.png')}/>
                    </TouchableOpacity>

                </View>
                <TouchableWithoutFeedback
                    disabled={false}
                    onPress={()=>{
                        console.warn('onPress');
                    }}
                    onLongPress={()=>{
                        console.warn('onLongPress');
                    }}

                    onPressIn={()=>{
                        console.warn('onPressIn');
                    }}
                    onPressOut={()=>{
                        console.warn('onPressOut');
                    }}>
                    <View style={{height:30,marginTop:20,backgroundColor:'#cccccc'}}>
                        <Text>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableHighlight
                    style={{height:30,marginTop:20,backgroundColor:'#cccccc',justifyContent:'center',alignItems:'center'}}
                    activeOpacity={0.85}
                    onHideUnderlay={()=>{
                        console.warn('onHideUnderlay');
                    }}
                    onShowUnderlay={()=>{
                        console.warn('onShowUnderlay');
                    }}
                    underlayColor='red'
                    onPress={()=>{
                        console.warn('onPress');
                    }}>
                    <Text>TouchableHighlight</Text>
                </TouchableHighlight>

                <TouchableOpacity
                    style={{height:30,marginTop:20,backgroundColor:'#cccccc',justifyContent:'center',alignItems:'center'}}
                    activeOpacity={0.5}

                    onPress={()=>{
                        console.warn('onPress');
                    }}>
                    <Text>TouchableOpacity</Text>
                </TouchableOpacity>

                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}
                    onPress={()=>{
                        console.warn('onPress');
                    }}>
                    <View style={{height:44,backgroundColor:'#cccccc',marginTop:20,justifyContent: 'center',alignItems: 'center',}}>
                        <Text>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: Platform.select({
        ios: {
            height: 74,
            paddingTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#cccccc',
            borderBottomWidth: 1,
            backgroundColor: '#161616',
        },
        android: {
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#cccccc',
            borderBottomWidth: 1,
            backgroundColor: '#161616',
        },
    }),

    title: {
        color: 'white',
        fontSize: 17,
        paddingLeft: 100,
        paddingRight: 100,
    },

    backImg: {
        width: 20,
        height: 20,
    },
    touchable: Platform.select({
        ios: {
            position: 'absolute',
            paddingTop: 30,
            left: 0,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
        },
        android: {
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
        },
    })
})