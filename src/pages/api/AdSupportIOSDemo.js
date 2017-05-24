/**
 * Created by mengqingdong on 2017/5/23.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    AdSupportIOS,
} from 'react-native';

export default class AdSupportIOSDemo extends Component {

    static navigationOptions = {
        title: 'AdSupportIOS',
    };

    state = {
        deviceID: '0',
        hasAdvertiserTracking: '0',
    };

    componentDidMount() {
        AdSupportIOS.getAdvertisingId(
            this._onDeviceIDSuccess,
            this._onDeviceIDFailure
        );

        AdSupportIOS.getAdvertisingTrackingEnabled(
            this._onHasTrackingSuccess,
            this._onHasTrackingFailure
        );
    }

    _onHasTrackingSuccess = (hasTracking) => {
        this.setState({
            'hasAdvertiserTracking': hasTracking,
        });
    };

    _onHasTrackingFailure = (e) => {
        this.setState({
            'hasAdvertiserTracking': 'Error!',
        });
    };

    _onDeviceIDSuccess = (deviceID) => {
        this.setState({
            'deviceID': deviceID,
        });
    };

    _onDeviceIDFailure = (e) => {
        this.setState({
            'deviceID': 'Error!',
        });
    };

    render() {
        return (
            <View>
                <Text>
                    <Text style={styles.title}>Advertising ID: </Text>
                    {JSON.stringify(this.state.deviceID)}
                </Text>
                <Text>
                    <Text style={styles.title}>Has Advertiser Tracking: </Text>
                    {JSON.stringify(this.state.hasAdvertiserTracking)}
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    title: {
        fontWeight: '500',
    },
});