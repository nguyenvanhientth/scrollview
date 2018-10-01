import React, {Component} from 'react';
import {AppRegistry,ViewPagerAndroid,Image,TextInput,StyleSheet, Text, View} from 'react-native';

export default class ViewPageScroll extends Component{
    render() {
        return(
            <ViewPagerAndroid 
            style = {{flex:1}}
            initialPage={0}
            onPageScrollStateChanged={(state)=>{
                console.log(`Scrolling state = ${state}`)
            }}
            onPageSelected={(event)=>{
                console.log(`Scroll to page= ${event.nativeEvent.position}`)
            }}>
                <View style={{backgroundColor:'lightseagreen'}}>
                    <Text style = {style.textStyle}>Man hinh 1</Text>
                </View>
                <View style={{backgroundColor:'lightseagreen'}}>
                    <Text style = {style.textStyle}>Man hinh 2</Text>
                </View>
                <View style={{backgroundColor:'lightseagreen'}}>
                    <Text style = {style.textStyle}>Man hinh 3</Text>
                </View>
                <View style={{backgroundColor:'lightseagreen'}}>
                    <Text style = {style.textStyle}>Man hinh 4</Text>
                </View>
            </ViewPagerAndroid>
        );
    }
}
const style = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        textAlign: 'center'
    }
})