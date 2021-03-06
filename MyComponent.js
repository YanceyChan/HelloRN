import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class MyComponent extends Component {
    render () {
        return(
            <View style={styles.mainView}>
                <Text style={styles.componentText}>MyComponent</Text>
                <MySubComponent/>
            </View>
        );
    };
}

class MySubComponent extends Component {
    render () {
        return (
            <Text style={styles.subComponentText}>subComponent</Text>
        );
    };
}

const styles = StyleSheet.create({
    mainView : {
        backgroundColor: '#ddd1aa'
    },
    componentText : {
        textAlign: 'center',
        color: 'blue',
        fontWeight: '100',
        fontSize: 24,
    },
    subComponentText : {
        fontSize: 18,
        color: '#b466dd',
        textAlign: 'center'
    }

});