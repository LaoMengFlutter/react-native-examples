/**
 * Created by 孟庆东 on 2017/8/4.
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    ScrollView,
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class PullZoomScrollView extends Component {

    static propTypes = {
        imageHeight: PropTypes.number,
        source: Image.propTypes.source,
        minHeight:PropTypes.number,
    }

    static defaultProps = {
        imageHeight: 300,
        minHeight:0,
    }

    constructor(props) {
        super(props);
        this.state = {
            height: props.imageHeight,
        };
    }

    onScroll = (e) => {
        var {imageHeight,minHeight} = this.props;
        var height = Math.max(minHeight,(imageHeight - e.nativeEvent.contentOffset.y))
        this.setState({
            height: height,
        });
    }

    render() {
        var {imageHeight,source} = this.props;

        return (
            <View style={{flex: 1}}>

                <ScrollView
                    style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
                    onScroll={this.onScroll}>
                    <View style={{width:1,height:imageHeight}}/>
                    {this.props.children}
                </ScrollView>
                <Image style={{width: width, height: this.state.height}} source={source}/>
            </View>
        );
    }
}