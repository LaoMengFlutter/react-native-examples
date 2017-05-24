/**
 * Created by mengqingdong on 2017/5/23.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ViewPagerAndroid,
    Text,
} from 'react-native';

export default class ViewPagerAndroidDemo extends Component {

    static navigationOptions = {
        title: 'ViewPagerAndroid',
    };
    state = {
        position: 0,
        offset: 0,
        onPageScrollState:0,
        onPageSelectedIndex:0,
    }
    _viewPage;
    componentDidMount(){
        setInterval(()=>{
            if(this.state.onPageSelectedIndex>=4){
                this.setState({
                    onPageSelectedIndex:0,
                });
            }else{
                this.setState({
                    onPageSelectedIndex:this.state.onPageSelectedIndex+1,
                });
            }
            this._viewPage.setPage(this.state.onPageSelectedIndex);
        },2000)
    }

    _onPageScroll = (event) => {
        this.setState({
            position: event.nativeEvent.position,
            offset: event.nativeEvent.offset,
        });
    }

    _onPageScrollStateChanged = (value)=>{
        this.setState({
            onPageScrollState:value,
        });
    }

    _onPageSelected=(event)=>{
        this.setState({
            onPageSelectedIndex:event.nativeEvent.position,
        });
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Text>position:{this.state.position}offset:{this.state.offset}</Text>
                <Text>onPageScrollState:{this.state.onPageScrollState}</Text>
                <Text>onPageSelectedIndex:{this.state.onPageSelectedIndex}</Text>
                <ViewPagerAndroid
                    ref={(viewPager)=>this._viewPage = viewPager}
                    style={{flex:1}}
                    initialPage={0}
                    onPageScroll={this._onPageScroll}
                    scrollEnabled={true}
                    onPageScrollStateChanged={this._onPageScrollStateChanged}
                    onPageSelected={this._onPageSelected}>

                    <View style={[styles.pageStyle,{backgroundColor:'red'}]}>
                        <Text>1</Text>
                    </View>
                    <View style={[styles.pageStyle,{backgroundColor:'blue'}]}>
                        <Text>2</Text>
                    </View>
                    <View style={[styles.pageStyle,{backgroundColor:'green'}]}>
                        <Text>3</Text>
                    </View>
                    <View style={[styles.pageStyle,{backgroundColor:'white'}]}>
                        <Text>4</Text>
                    </View>
                    <View style={[styles.pageStyle,{backgroundColor:'yellow'}]}>
                        <Text>5</Text>
                    </View>

                </ViewPagerAndroid >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pageStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})