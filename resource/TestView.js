import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

export default class testView extends Component {
    static defaultProps = {
        textContent : '你好',
    };

    static propTypes = {
        textContent: React.PropTypes.string.isRequired,
    }
    render() {
        return(
            <View style={myStyles.myView}>
                <Text style={myStyles.myText} allowFontScaling={true} numberOfLines={3}>{this.props.textContent}</Text>
                <Text>加载本地图片</Text>
                <Image source={require('../image/sky.jpg')}/>
                <Text>加载app图片</Text>
                <Text>加载网络图片</Text>
            </View>
        );
    }
}

const myStyles = StyleSheet.create({
    myView : {
        flex: 1,
        backgroundColor: '#ffa63d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myText : {
        fontSize: 36,
        color: '#ffffff',
        textAlign: 'center',

        // fontWeight: 400,
    }

})