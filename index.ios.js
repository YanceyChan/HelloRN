import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import MyComponent from './MyComponent';

// var textStyle = {color: '#ffd32f', fontSize: 18};

export default class HelloRN extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Text style={styles.centerText}>你好！RN</Text>
                <Text style={styles.testText}>
                    测试排版
                </Text>
                <MyComponent/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
    } ,
    centerText: {
        color: '#ffd32f',
        fontSize: 18
    },
    testText: {
        backgroundColor: 'black',
        textDecorationStyle: 'solid',
        color: 'white',
        fontSize: 24,
    }

});



AppRegistry.registerComponent('HelloRN', () => HelloRN);