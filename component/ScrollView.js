import React, {Component} from 'react';
import {AppRegistry,ScrollView,Image,TextInput,Dimensions, Text, View} from 'react-native';

export default class Scrollview extends Component{
    render(){
        let screenWidth = Dimensions.get('window').width;
        return (
            <ScrollView
                maximumZoomScale={3}
                //horizontal ={true}
                minimumZoomScale={0.2}
                keyboardDismissMode = 'on-drag'
                contentContainerStyle={{paddingLeft: 20}}
            >
                <Image source = {require('../image/LeQuyen.jpg')}
                    style ={{width: screenWidth, height: screenWidth * 240/240, marginTop: 20}}>

                </Image>
                <Text style={{ fontSize: 20,
                            padding:15,
                            color: 'white',
                            textAlign:'center',
                            backgroundColor: 'green'
                            }}
                >
                   CS. Le Quyen!!
                </Text>
                <Image source = {require('../image/LeBaoBinh.jpg')}
                    style ={{width: screenWidth, height: screenWidth * 240/240, marginTop: 20}}>

                </Image>
                <Text style={{ fontSize: 20,
                            padding:15,
                            color: 'white',
                            textAlign:'center',
                            backgroundColor: 'green'
                            }}
                >
                   CS. Le Bao Binh!
                </Text>
                <Image source = {require('../image/SaraLuu.jpg')}
                    style ={{width: screenWidth, height: screenWidth * 240/240, marginTop: 20}}>

                </Image>
                <Text style={{ fontSize: 20,
                            padding:15,
                            color: 'white',
                            textAlign:'center',
                            backgroundColor: 'green'
                            }}
                >
                    CS. Saka Luu
                </Text>
                <Image source = {require('../image/HoaVinh.jpg')}
                    style ={{width: screenWidth, height: screenWidth * 240/240, marginTop: 20}}>

                </Image>
                <Text style={{ fontSize: 20,
                            padding:15,
                            color: 'white',
                            textAlign:'center',
                            backgroundColor: 'green'
                            }}
                >
                    CS. Hoa Vinh!!!
                </Text>
            </ScrollView>
        );
        
    }
}