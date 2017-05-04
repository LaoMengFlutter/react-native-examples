/**
 * Created by mengqingdong on 2017/5/3.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    DatePickerIOS,
} from 'react-native';

export default class DatePickerIOSDemo extends Component {
    static navigationOptions = {
        title: 'DatePickerIOS',
    };

    maxDate = new Date();
    minDate = new Date();
    constructor(props){
        super(props);
        this.maxDate.setDate(new Date().getDate()+365);
        this.minDate.setDate(new Date().getDate()-365);
    }
    state = {
        date: new Date(),
        dateTxt: '',
        maxDate: this.maxDate,
        minDate: this.minDate,
        mode: 'datetime',
        minuteInterval: 1,
        timeZoneOffsetInMinutes: 8*60,
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Text>{'选中时间：'+this.state.dateTxt}</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text>设置mode：</Text>
                    <Button title='date' onPress={()=>{this.setState({mode:'date'})}}/>
                    <Button title='time' onPress={()=>{this.setState({mode:'time'})}}/>
                    <Button title='datetime' onPress={()=>{this.setState({mode:'datetime'})}}/>
                </View>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text>设置minuteInterval：</Text>
                    <Button title='1' onPress={()=>{this.setState({minuteInterval:1})}}/>
                    <Button title='5' onPress={()=>{this.setState({minuteInterval:5})}}/>
                    <Button title='30' onPress={()=>{this.setState({minuteInterval:30})}}/>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text>设置timeZoneOffsetInMinutes：</Text>
                    <Button title='东九区' onPress={()=>{this.setState({timeZoneOffsetInMinutes:9*60})}}/>
                    <Button title='东八区' onPress={()=>{this.setState({timeZoneOffsetInMinutes:8*60})}}/>
                    <Button title='东七区' onPress={()=>{this.setState({timeZoneOffsetInMinutes:7*60})}}/>
                </View>
                <DatePickerIOS
                    date={this.state.date}
                    maximumDate={this.state.maxDate}
                    minimumDate={this.state.minDate}
                    mode={this.state.mode}
                    minuteInterval={this.state.minuteInterval}
                    timeZoneOffsetInMinutes={this.state.timeZoneOffsetInMinutes}
                    onDateChange={(date)=>{
                        this.setState({date:date});
                        var year = date.getFullYear();
                        var month = date.getMonth();
                        var date1 = date.getDate();
                        var hour = date.getHours();       //获取当前小时数(0-23)
                        var mins = date.getMinutes();     //获取当前分钟数(0-59)
                        var secs = date.getSeconds();     //获取当前秒数(0-59)
                        var msecs = date.getMilliseconds();    //获取当前毫秒数(0-999)
                        var s = year+"-"+month+"-"+date1+' '+hour+':'+mins+':'+secs+':'+msecs;
                        this.setState({dateTxt:s});
                }}/>
            </View>
        );
    }
}