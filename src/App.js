/**
 * Created by mengqingdong on 2017/4/19.
 */
import React, {Component} from 'react';
import {
    Navigator,
} from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';

import MainPage from './pages/MainPage'
import ImageDemo from './pages/components/ImageDemo'
import TouchableDemo from './pages/components/TouchableDemo'
import XTouchableDemo from './pages/mycomponents/XTouchableDemo'
import SectionListDemo from './pages/components/SectionListDemo'
import FlatListDemo from './pages/components/FlatListDemo'
import ScrollViewDemo from './pages/components/ScrollViewDemo'
import SwitchDemo from './pages/components/SwitchDemo'
import TextDemo from './pages/components/TextDemo'
import ButtonDemo from './pages/components/ButtonDemo'
import ActivityIndicatorDemo from './pages/components/ActivityIndicatorDemo'
import NavigatorsDemo from './pages/components/NavigatorsDemo'
import TextInputDemo from './pages/components/TextInputDemo'
import SliderDemo from './pages/components/SliderDemo'
import StatusBarDemo from './pages/components/StatusBarDemo'



export default App = StackNavigator({
        Main: {screen: MainPage,},
        Image: {screen: ImageDemo,},
        Touchable: {screen: TouchableDemo,},
        XTouchable: {screen: XTouchableDemo,},
        SectionList: {screen: SectionListDemo,},
        FlatList: {screen: FlatListDemo,},
        ScrollView: {screen: ScrollViewDemo,},
        Switch: {screen: SwitchDemo,},
        Text: {screen: TextDemo,},
        Button: {screen: ButtonDemo,},
        ActivityIndicator: {screen: ActivityIndicatorDemo,},
        Navigators: {screen: NavigatorsDemo,},
        TextInput:{screen: TextInputDemo,},
        Slider:{screen: SliderDemo,},
        StatusBar:{screen: StatusBarDemo,},

    },
    {
        // initialRouteName: 'Profile', // 默认显示界面
        navigationOptions: {
            header: {
                backTitle: 'Back',
                // style:styles.header,
                // right: <Button title="Info" />,
                // left:<Button title="left" />,
                // titleStyle:styles.title,
                // visible:true,
                // title: 'ProfileScreen',
                // tintColor:'yellow',
                // gesturesEnabled:true,
            },
        },
        // headerMode:'screen',
    }
);

// export default class App extends Component {
//
//     _renderScene(route, navigator) {
//         let Component = route.component;
//         return <Component route={route} navigator={navigator}/>
//     }
//
//     render() {
//         return (
//             <Navigator
//                 initialRoute={{component:MainPage}}
//                 renderScene={this._renderScene.bind(this)}/>
//         );
//     }
// }