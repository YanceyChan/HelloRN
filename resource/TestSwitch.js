import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Switch,
    Picker,
    PickerIOS,
    Text
} from 'react-native';

import SwitchIOS from 'react-test-renderer';

export default class TestSwitch extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            trueSwitchIsOn : true,
            falseSwitchIsOn : false,
            language: 'Java',
            index: '0',
        };
    }
    render(){
        return(
            <View style={styles.container}>
                <Switch value={this.state.trueSwitchIsOn}
                        onValueChange={(ononon)=>{
                            this.setState({trueSwitchIsOn: ononon})
                        }}

                />
                <Picker
                    style={{width:200, height:200}}
                    selectedValue={this.state.language}
                    onValueChange={(value,item) => this.setState({language: value, index:item})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="javaScript" />
                </Picker>
                <Text style={{color: '#fff'}}>{this.state.language} {this.state.index}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#999',
   }
});