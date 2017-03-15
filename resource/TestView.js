import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
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
                <View style={myStyles.topView}>
                    <View style={myStyles.topSonView1}/>
                    <View style={myStyles.topSonView2}/>
                </View>
                <View style={myStyles.middleView}>
                    <View style={[myStyles.midSonView, myStyles.defualtPadding]}/>
                    <View style={[myStyles.midSonView, myStyles.defualtPadding]}/>
                    <View style={[myStyles.midSonView, myStyles.defualtPadding]}/>
                    <View style={[myStyles.midSonView, myStyles.defualtPadding]}/>
                </View>
                <View style={myStyles.bottomView}>
                    <View style={{flex:1, backgroundColor: 'green', marginVertical: 5, marginLeft: 5}}/>
                    <View style={{flex:3,  marginVertical: 5, marginRight: 5}}>
                        <View style={{flex: 1, backgroundColor: 'green'}}></View>
                        <View style={{flex: 3, flexDirection: 'row', backgroundColor: '#45ffec'}}>
                            <View style={{flex: 6, backgroundColor: '#45ffec',}}>
                                <View style={{flex:5, backgroundColor: '#45ffec', marginLeft: 5,
                                    marginTop: 5,flexDirection: 'row'}}>
                                    <View style={{flex: 1, backgroundColor: 'green',}}></View>
                                    <View style={{flex: 6, backgroundColor: '#45ffec', marginRight: 5, marginBottom: 5}}>
                                        <View style={{flex: 1, backgroundColor: 'green'}}></View>
                                        <View style={{flex: 3, backgroundColor: '#45ffec', flexDirection: 'row'}}>
                                            <View style={{flex: 6, backgroundColor: '#45ffec', marginLeft: 5,
                                                marginTop: 5}}>
                                                <View style={{flex: 2, backgroundColor: '#45ffec', flexDirection: 'row',
                                                    marginRight: 5}}>
                                                    <View style={{flex: 1, backgroundColor: 'green'}}></View>
                                                    <View style={{flex: 4, backgroundColor: 'yellow', marginBottom: 5}}>
                                                        <View style={{flex: 2, backgroundColor: 'green'}}></View>
                                                        <View style={{flex: 3, backgroundColor: '#45ffec',
                                                            flexDirection: 'row'}}>
                                                            <View style={{flex: 7, backgroundColor: '#45ffec',
                                                                marginLeft: 5, marginTop: 3, }}>
                                                                <View style={{flex: 2, backgroundColor: '#45ffec',
                                                                    flexDirection: 'row'}}>
                                                                    <View style={{flex: 1, backgroundColor: 'green'}}></View>
                                                                    <View style={{flex: 10, backgroundColor: '#45ffec',
                                                                        marginRight: 5}}>
                                                                        <View style={{flex: 1, backgroundColor: 'green'}}></View>
                                                                        <View style={{flex: 1, backgroundColor: '#45ffec'}}></View>
                                                                    </View>
                                                                </View>
                                                                <View style={{flex: 2, backgroundColor: 'green',}}></View>
                                                            </View>
                                                            <View style={{flex: 1, backgroundColor: 'green'}}></View>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{flex: 1, backgroundColor: 'green',}}></View>
                                            </View>
                                            <View style={{flex: 1, backgroundColor: 'green'}}></View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{flex:1, backgroundColor: 'green', marginLeft: 5,}}></View>
                            </View>
                            <View style={{flex: 1, backgroundColor: 'green', }}></View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const myStyles = StyleSheet.create({
    myView : {
        flex: 1,
        backgroundColor: '#edf4ff',

    },
    myText : {
        fontSize: 36,
        color: '#ffffff',
        textAlign: 'center',
        // fontWeight: 400,
    },
    topView : {
        flex: 1,
        backgroundColor: '#7684ff',
    },
    middleView : {
        flex: 4,
        backgroundColor: '#ff9eeb',
        flexDirection: 'row',
    },
    bottomView : {
        flex: 2,
        backgroundColor: '#45ffec',
        flexDirection: 'row'
    },
    topSonView1 : {
        flex: 1,
        margin: 5,
        backgroundColor: '#ddd1aa',
    },
    topSonView2 : {
        flex: 2,
        marginHorizontal: 10,
        backgroundColor: '#ddd1aa',
    },
    midSonView : {
        flex: 1,
        backgroundColor: 'red'
    },
    defualtPadding : {
        padding: 5,
        margin: 10,
    }

})