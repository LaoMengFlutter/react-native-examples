/**
 * Created by mengqingdong on 2017/5/5.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    TextInput,
    Text,
    Button,
    Modal,
    SegmentedControlIOS,
    TouchableHighlight,
} from 'react-native';

export default class KeyboardAvoidingViewDemo extends Component {

    state = {
        behavior: 'padding',
        modalOpen: true,
    };

    onSegmentChange = (segment: String) => {
        this.setState({behavior: segment.toLowerCase()});
    };

    render() {
        return (
            <View style={styles.outerContainer}>
                <View style={{flex:1}}>
                    <KeyboardAvoidingView behavior={this.state.behavior} style={styles.container}>
                        <SegmentedControlIOS
                            onValueChange={this.onSegmentChange}
                            selectedIndex={0}
                            style={styles.segment}
                            values={['Padding', 'Position','Height']}/>
                        <TextInput
                            placeholder="<TextInput />"
                            style={styles.textInput}/>
                    </KeyboardAvoidingView>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 44,
        paddingHorizontal: 10,
    },
    segment: {
        marginBottom: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 30,
        left: 10,
    }
});