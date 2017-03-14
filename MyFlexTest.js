import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

export default class MyFlexTest extends Component {
    render () {
        return (
            <View style={styles.mainView}>
                <View style={styles.view1}></View>
                <View style={styles.view2}></View>
                <View style={styles.view3}></View>
                <View style={styles.view4}></View>
                <View style={styles.view5}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView : {
        flex : 1,
        // flexDirection: 'row',//row, column  主轴方向
        // flexWrap: 'wrap', //主轴方向到边后是否换到下一个行开始排列
        justifyContent: 'space-between',//flex-start、center、flex-end、space-around以及space-between
        alignItems: 'center',//flex-start、center、flex-end以及stretch
        //要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸
        backgroundColor: '#abc8ff',
    },
    view1 : {
        // flex: 1,
        width: 200,
        height: 100,
        backgroundColor: '#ff3d49',
    },
    view2 : {
        // flex: 1,
        width: 130,
        height: 100,
        backgroundColor: '#ffaf44',
    },
    view3 : {
        // flex: 1,
        width: 140,
        height: 100,
        backgroundColor: '#fff62a',
    },
    view4 : {
        // flex: 1,
        width: 110,
        height: 100,
        backgroundColor: '#63ff5e',
    },
    view5 : {
        // flex: 1,
        width: 100,
        height: 100,
        backgroundColor: '#58ffd6',
    },

});