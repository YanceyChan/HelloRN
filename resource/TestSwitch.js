import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Switch,
    SwitchIOS,
} from 'react-native';

export default class TestSwitch extends Component{
    render(){
        return(
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#999'
   }
});