/**
 * Created by mengqingdong on 2017/4/20.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    AppRegistry,
    View,
    Text,
    Button,
} from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';

const styles = StyleSheet.create({
    title: {
        color: 'red',
    },
    header: {
        backgroundColor: 'black',
    }
})

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'HomeScreen',
        header: {
            backTitle: '返回',
        }
    };

    render() {
        return <Button title='to Profile' onPress={()=>this.props.navigation.navigate('Profile',{user:'mqd'})}/>;
    }
}

class ProfileScreen extends Component {


    static navigationOptions = (navigation)=>{

        return({
            title:'ProfileScreen'
        });
        // title: ({state}) => {
        //     if (state.params && state.params.user) {
        //         return state.params.user;
        //     } else {
        //         return 'ProfileScreen';
        //     }
        // }
    };

    render() {
        var title = ' to Home';
        return <Button title={title} onPress={()=>this.props.navigation.navigate('Home')}/>;
    }
}


const SimpleApp = TabNavigator({
        Home: {
            screen: HomeScreen,
        },
        Profile: {
            screen: ProfileScreen,
        },

    },
    //{
    // initialRouteName: 'Profile', // 默认显示界面
    // navigationOptions:{
    //     header: {
    //         style:styles.header,
    //         right: <Button title="Info" />,
    //         // left:<Button title="left" />,
    //         titleStyle:styles.title,
    //         // visible:true,
    //         // title: 'ProfileScreen',
    //         // tintColor:'yellow',
    //         gesturesEnabled:true,
    //     },
    // },
    // headerMode:'screen',
//}
);


export default class NavigatorsDemo extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <SimpleApp />
            </View>
        );
    }
}

