import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    ListView,

} from 'react-native';

import MyComponent from './MyComponent';
import MyComponentProp from './MyConmponetProp';
import MyFlexTest from './MyFlexTest.js';

// var textStyle = {color: '#ffd32f', fontSize: 18};

export default class HelloRN extends Component {
    render() {
        return (
            <View style={styles.mainView}>
            </View>
        );
    }
}

//ListView
// class ListViewBasics extends Component {
//     // 初始化模拟数据
//     constructor(props) {
//         super(props);
//         const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         this.state = {
//             dataSource: ds.cloneWithRows([
//                 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//             ])
//         };
//     }
//     render() {
//         return (
//             <View style={{flex: 1, paddingTop: 22}}>
//                 <ListView
//                     dataSource={this.state.dataSource}
//                     renderRow={(rowData) => <Text>{rowData}</Text>}
//                 />
//             </View>
//         );
//     }
// }

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

//Flex
// export default class HelloRN extends Component {
//     render() {
//         return (
//             <View style={styles.mainView}>
//                 <MyFlexTest/>
//             </View>
//         );
//     }
// }

//TextInput
// export default class HelloRN extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//           outputText : '',
//       }
//     };
//     render() {
//         return (
//             <View style={styles.mainView}>
//                 <TextInput style={styles.myTextInput}
//                            placeholder='请输入文字'
//                            placeholderTextColor= '#ffffff'
//                            onChangeText={
//                                (text) => {
//                                    this.setState({outputText : text})
//                                }
//                            }
//                            />
//                 <Text>{this.state.outputText}</Text>
//             </View>
//         );
//     }
// }



const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    myTextInput: {
        height:40,
        backgroundColor: 'red',
    }

});



AppRegistry.registerComponent('HelloRN', () => HelloRN);