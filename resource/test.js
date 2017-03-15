import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class test extends Component {
    render() {
        return(
            <View style={myStyles.myView}>

            </View>
        );
    }
}

const myStyles = StyleSheet.create({
    myView : {
        flex: 1,
        backgroundColor: '#ffa63d',
    },
    myText : {
        fontSize: 36,
        color: '#ffffff',
        textAlign: 'center',
        // fontWeight: 400,
    }

})