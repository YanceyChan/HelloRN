import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';

export default class TestView2 extends Component{
    render() {
        return(
            <View style={myStyles.mainView}>
                <Text style={myStyles.myText}>本地图片</Text>
                <Image style={myStyles.myImage} source={require('../image/sky.jpg')}/>
                <Text style={myStyles.myText}>网络图片</Text>
                <Image style={myStyles.myImage} source={{url: 'http://a4.att.hudong.com/38/47/19300001391844134804474917734_950.png'}}/>
                <Text>APP图片</Text>
                <Image style={myStyles.myImage} source={{uri: 'timg'}}/>
            </View>
        );
    }
}

const myStyles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    myText: {
        marginTop: 30,
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
        textDecorationColor: 'blue',
    },
    myImage: {
        margin: 10,
        width: 100,
        height: 100,
    }
});