/**
 * Created by mengqingdong on 2017/4/19.
 */
import React, {Component} from 'react';
import {
} from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';

import MainPage from './pages/MainPage'
import ImageDemo from './pages/components/ImageDemo'
import ImageBackgroundDemo from './pages/components/ImageBackgroundDemo'
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
import DatePickerIOSDemo from './pages/components/DatePickerIOSDemo'
import DrawerLayoutAndroidDemo from './pages/components/DrawerLayoutAndroidDemo'
import KeyboardAvoidingViewDemo from './pages/components/KeyboardAvoidingViewDemo'
import ModalDemo from './pages/components/ModalDemo'
import PickerDemo from './pages/components/PickerDemo'
import ProgressBarAndroidDemo from './pages/components/ProgressBarAndroidDemo'
import RefreshControlDemo from './pages/components/RefreshControlDemo'
import SegmentedControlIOSDemo from './pages/components/SegmentedControlIOSDemo'
import TabBarIOSDemo from './pages/components/TabBarIOSDemo'
import ToolbarAndroidDemo from './pages/components/ToolbarAndroidDemo'
import ViewPagerAndroidDemo from './pages/components/ViewPagerAndroidDemo'
import ActionSheetIOSDemo from './pages/api/ActionSheetIOSDemo'
import AdSupportIOSDemo from './pages/api/AdSupportIOSDemo'
import AlertDemo from './pages/api/AlertDemo'
import AnimatedDemo from './pages/api/AnimatedDemo'
import AppStateDemo from './pages/api/AppStateDemo'
import AsyncStorageDemo from './pages/api/AsyncStorageDemo'
import VibrationDemo from './pages/api/VibrationDemo'
import TimePickerAndroidDemo from './pages/api/TimePickerAndroidDemo'

export default App = StackNavigator({
        Main: {screen: MainPage,},
        Image: {screen: ImageDemo,},
        ImageBackground: {screen: ImageBackgroundDemo,},
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
        DatePickerIOS:{screen: DatePickerIOSDemo,},
        DrawerLayoutAndroid:{screen: DrawerLayoutAndroidDemo,},
        KeyboardAvoidingView:{screen: KeyboardAvoidingViewDemo,},
        Modal:{screen: ModalDemo,},
        Picker:{screen: PickerDemo,},
        ProgressBarAndroid:{screen: ProgressBarAndroidDemo,},
        RefreshControl:{screen: RefreshControlDemo,},
        SegmentedControlIOS:{screen: SegmentedControlIOSDemo,},
        TabBarIOS:{screen: TabBarIOSDemo,},
        ToolbarAndroid:{screen: ToolbarAndroidDemo,},
        ViewPagerAndroid:{screen: ViewPagerAndroidDemo,},
        ActionSheetIOS:{screen: ActionSheetIOSDemo,},
        AdSupportIOS:{screen: AdSupportIOSDemo,},
        Alert:{screen: AlertDemo,},
        Animated:{screen: AnimatedDemo,},
        AppState:{screen: AppStateDemo,},
        AsyncStorage:{screen: AsyncStorageDemo,},
        Vibration:{screen: VibrationDemo,},
        TimePickerAndroid:{screen: TimePickerAndroidDemo,},

    },
    {
        // initialRouteName: 'Profile', // 默认显示界面
        // navigationOptions: {
        //     header: {
                // backTitle: 'Back',
                // style:styles.header,
                // right: <Button title="Info" />,
                // left:<Button title="left" />,
                // titleStyle:styles.title,
                // visible:true,
                // title: 'ProfileScreen',
                // tintColor:'yellow',
                // gesturesEnabled:true,
            // },
        // },
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