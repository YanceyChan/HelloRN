import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class MyComponentProp extends Component {
    render () {
        return(
            <View style={styles.mainView}>
                <Text style={styles.componentText}>MyComponentProp</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    mainView : {
        backgroundColor: '#c79fdd'
    },
    componentText : {
        textAlign: 'center',
        color: 'blue',
        fontWeight: '100',
        fontSize: 24,
    },

});