import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import MyComponent from './MyComponent';
import MyComponentProp from './MyConmponetProp';
import MyFlexTest from './MyFlexTest.js';

// var textStyle = {color: '#ffd32f', fontSize: 18};

//属性prop 状态state
// export default class HelloRN extends Component {
//     render() {
//         return (
//             <View style={styles.mainView}>
//                 <Text style={styles.centerText}>你好！RN flex</Text>
//                 <MyComponent/>
//                 <MyComponentProp showText= 'showText1'/>
//                 <MyComponentProp showText= 'showText2'/>
//             </View>
//         );
//     }
// }

export default class HelloRN extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <MyFlexTest/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'black',
    } ,
    centerText: {
        color: '#ff8401',
        fontSize: 28,
        fontWeight: 'bold',

    },
    testText: {
        backgroundColor: 'black',
        textDecorationStyle: 'solid',
        color: 'white',
        fontSize: 24,
    }

});



AppRegistry.registerComponent('HelloRN', () => HelloRN);