import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    Image,
} from 'react-native';

export default class TestScrollView extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    进行测试ScrollView控件
                </Text>
                <ScrollView showsHorizontalScrollIndicator={true}
                            showsVerticalScrollIndicator={true}
                            contentContainerStyle={styles.contentContainer}
                            horizontal={true}
                >
                    <Text style={{fontSize:96}}>Scroll me plz</Text>
                    <View style={{height: 1, backgroundColor: '#ff00ff'}}/>
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Text style={{fontSize:96}}>If you like</Text>
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Text style={{fontSize:96}}>Scrolling down</Text>
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Text style={{fontSize:96}}>What's the best</Text>
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Text style={{fontSize:96}}>Framework around?</Text>
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Image source={require('../image/headLogo.png')} />
                    <Text style={{fontSize:80}}>React Native</Text>


                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    contentContainer: {
        margin:10,
        borderWidth:2,
        borderColor: 'red',
        borderRadius: 35,
        // backgroundColor:"#ff0000",
    }
});