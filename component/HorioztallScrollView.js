import React, {Component} from 'react';
import {AppRegistry,ScrollView,Image,TextInput,Dimensions, Text, View} from 'react-native';

export default class HorioztallScrollview extends Component{
    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
                maximumZoomScale={3}
                horizontal ={true}
                minimumZoomScale={0.2}
                pagingEnabled = {true}
                onMomentumScrollBegin={()=> {
                    alert('Begin scrolling')
                }}
                onMomentumScrollEnd = {()=>{
                    alert('Scrolling end!')
                }}
            >
            <View style = {{
                backgroundColor: '#5f9ea0',
                flex: 1,
                marginTop: 20,
                width: screenWidth,
                alignItems: 'center',
                justifyContent:'center'
            }}>
            <Text style ={{ fontSize: 20,
                            padding:15,
                            color: 'white',
                            textAlign:'center',
                            backgroundColor: 'green'}}>
                1
            </Text>
                
            </View>
            <View style = {{
                backgroundColor: '#5f9ea0',
                flex: 1,
                marginTop: 20,
                width: screenWidth,
                alignItems: 'center',
                justifyContent:'center'
            }}>
                <Text style ={{ fontSize: 20,
                            padding:15,
                            color: 'white',
                            textAlign:'center',
                            backgroundColor: 'green'}}>
                2
            </Text>
            </View>
            <View style = {{
                backgroundColor: '#5f9ea0',
                flex: 1,
                marginTop: 20,
                width: screenWidth,
                alignItems: 'center',
                justifyContent:'center'
            }}>
                <Text style ={{ fontSize: 20,
                            padding:15,
                            color: 'white',
                            textAlign:'center',
                            backgroundColor: 'green'}}>
                3
            </Text>
            </View>
            <View style = {{
                backgroundColor: '#5f9ea0',
                flex: 1,
                marginTop: 20,
                width: screenWidth,
                alignItems: 'center',
                justifyContent:'center'
            }}>
                <Text style ={{ fontSize: 20,
                            padding:15,
                            color: 'white',
                            textAlign:'center',
                            backgroundColor: 'green'}}>
                4
            </Text>
            </View>
               
            </ScrollView>
        );
        
    }
}