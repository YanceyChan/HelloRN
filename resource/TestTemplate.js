import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

export default class TestSwitch extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 28, color: 'white'}}>模板</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999',
        justifyContent: 'center',
        alignItems: 'center',
    }
});