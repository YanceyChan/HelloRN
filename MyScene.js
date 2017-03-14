import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

export default class MyScene extends Component {
    static defaultProps = {
        title : 'MyScene',
    };

    static propTypes = {
        title : React.PropTypes.string.isRequired,
        onForward : React.PropTypes.func.isRequired,
        onBack : React.PropTypes.func.isRequired,

    };
    render() {
      return(
        <View>
            <Text>Hi! My name is {this.props.title}</Text>
            <TouchableHighlight onPress={this.props.onForward}>
                <Text>进入下一页</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.props.onBack}>
                <Text>返回上一页</Text>
            </TouchableHighlight>

        </View>
      )
    };
}