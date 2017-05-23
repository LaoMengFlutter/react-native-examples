/**
 * Created by mengqingdong on 2017/5/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TabBarIOS,
    Text,
    Button,
} from 'react-native';

export default class TabBarIOSDemo extends Component {

    static navigationOptions = {
        title: 'TabBarIOS',
    };
    state = {
        selectValue: 'tab1',
        systemIcon:'bookmarks',
    }
    _onValueChange = (value) => {
        this.setState({selectValue: value});
    }

    render() {
        return (
            <TabBarIOS
                barTintColor='black'
                tintColor="red"
                unselectedItemTintColor="blue"
                translucent={true}>
                <TabBarIOS.Item
                    badge='23'
                    selected={this.state.selectValue == 'tab1'}
                    systemIcon={this.state.systemIcon}
                    onPress={()=>this._onValueChange('tab1')}>
                    <View style={{flex:1}}>
                        <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                            <Text>设置systemIcon：</Text>
                            <Button title='bookmarks' onPress={()=>{this.setState({systemIcon:'bookmarks'})}}/>
                            <Button title='contacts' onPress={()=>{this.setState({systemIcon:'contacts'})}}/>
                            <Button title='downloads' onPress={()=>{this.setState({systemIcon:'downloads'})}}/>
                            <Button title='favorites' onPress={()=>{this.setState({systemIcon:'favorites'})}}/>
                            <Button title='featured' onPress={()=>{this.setState({systemIcon:'featured'})}}/>
                            <Button title='history' onPress={()=>{this.setState({systemIcon:'history'})}}/>
                            <Button title='more' onPress={()=>{this.setState({systemIcon:'more'})}}/>
                            <Button title='most-recent' onPress={()=>{this.setState({systemIcon:'most-recent'})}}/>
                            <Button title='most-viewed' onPress={()=>{this.setState({systemIcon:'most-viewed'})}}/>
                            <Button title='recents' onPress={()=>{this.setState({systemIcon:'recents'})}}/>
                            <Button title='search' onPress={()=>{this.setState({systemIcon:'search'})}}/>
                            <Button title='top-rated' onPress={()=>{this.setState({systemIcon:'top-rated'})}}/>

                        </View>
                    </View>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    selected={this.state.selectValue == 'tab2'}
                    icon={require('../../imgs/icon1.png')}
                    title='tab2'
                    onPress={()=>this._onValueChange('tab2')}>
                    <View style={{flex:1,backgroundColor:'blue'}}></View>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    selected={this.state.selectValue == 'tab3'}
                    systemIcon='recents'
                    onPress={()=>this._onValueChange('tab3')}>
                    <View style={{flex:1,backgroundColor:'green'}}></View>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}