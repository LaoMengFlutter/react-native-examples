/**
 * Created by mengqingdong on 2017/5/4.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    DrawerLayoutAndroid,
    Navigator,
    ToastAndroid,
} from 'react-native';

export default class DrawerLayoutAndroidDemo extends Component {

    static navigationOptions = {
        title: 'DrawerLayoutAndroid',
    };
    _drawer;
    _navigator;
    navigationView = () => {
        return (
            <View style={{flex:1, backgroundColor: '#ffffff'}}>
                <Button title='TO A' onPress={()=>{
                    this._drawer.closeDrawer();
                    this._navigator.push({component:A});
                }}></Button>
                <Button title='TO B' color='red' onPress={()=>{
                    this._drawer.closeDrawer();
                    this._navigator.push({component:B});
                }}></Button>
            </View>
        );
    }

    _renderScene = (route, navigator)=> {
        let Component = route.component;
        return <Component route={route} navigator={navigator} openDrawer={this._openDrawer} closeDrawer={this._closeDrawer}/>
    }

    state = {
        drawerLockMode: 'unlocked',
        drawerPosition: DrawerLayoutAndroid.positions.Left,
    }

    _onDrawerSlide = (event) => {
        //console.warn(event.nativeEvent.offset);
    }

    _onDrawerStateChanged = (event) => {
        console.warn(event);
    }

    _openDrawer = ()=>{
        this._drawer.openDrawer();
    }
    _closeDrawer = ()=>{
        this._drawer.closeDrawer();
    }
    render() {

        return (
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                    <Text>设置drawerLockMode：</Text>
                    <Button title='unlocked' onPress={()=>{this.setState({drawerLockMode:'unlocked'})}}/>
                    <Button title='locked-closed' onPress={()=>{this.setState({drawerLockMode:'locked-closed'})}}/>
                    <Button title='locked-open' onPress={()=>{this.setState({drawerLockMode:'locked-open'})}}/>
                </View>
                <Button title={this.state.drawerPosition == DrawerLayoutAndroid.positions.Left?'抽屉位置:右侧':'抽屉位置:左侧'}
                        onPress={()=>{
                            if(this.state.drawerPosition == DrawerLayoutAndroid.positions.Left){
                                this.setState({drawerPosition:DrawerLayoutAndroid.positions.Right});
                            }else{
                                this.setState({drawerPosition:DrawerLayoutAndroid.positions.Left});
                            }
                        }}/>
                <DrawerLayoutAndroid
                    ref={drawer=>this._drawer = drawer}
                    drawerLockMode={this.state.drawerLockMode}
                    drawerWidth={300}
                    drawerPosition={this.state.drawerPosition}
                    renderNavigationView={this.navigationView}
                    onDrawerClose={()=>{ToastAndroid.show('close',ToastAndroid.SHORT)}}
                    onDrawerOpen={()=>{ToastAndroid.show('open',ToastAndroid.SHORT)}}
                    onDrawerSlide={this._onDrawerSlide}
                    onDrawerStateChanged={this._onDrawerStateChanged}>
                    <Navigator
                        ref={navigator=>this._navigator = navigator}
                        initialRoute={{component:A,drawer:this._drawer}}
                        renderScene={this._renderScene.bind(this)}
                    />
                </DrawerLayoutAndroid>
            </View>
        );
    }
}
class A extends Component {
    render() {
        const {openDrawer,closeDrawer} = this.props;
        return (
            <View>
                <Button title='打开抽屉' onPress={()=>{openDrawer()}}/>
                <Button title='关闭抽屉' onPress={()=>{closeDrawer()}}/>
            </View>

        );
    }
}
class B extends Component {
    render() {
        return (
            <Text style={{fontSize:56}}>B</Text>
        );
    }
}