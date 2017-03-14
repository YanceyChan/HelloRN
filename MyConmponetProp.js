import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class MyComponentProp extends Component {
    static defaultProps = {
        showText : 'I\'m a Text',
        isShowText : true,
    };

    static propTypes = {
        showText: React.PropTypes.string.isRequired,
        isShowText: React.PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            show : true,
        };

        setInterval(() => {
            this.setState({
                show : !this.state.show
            })
        }, 500)
    }

    render () {
        let myText = this.state.show ? this.props.showText:' ';
        return(
            <View style={styles.mainView}>
                <Text style={styles.componentText}>{myText}</Text>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    mainView : {
        backgroundColor: '#c79fdd'
    },
    componentText : {
        textAlign: 'center',
        color: 'blue',
        fontWeight: '100',
        fontSize: 24,
    },

});