import React, { useRef } from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

export interface Props {
    title: string,
    onPress: Function
}

 const ButtonComponent = (props: Props) => {
    return (
        <TouchableHighlight style={styles.btn} onPress={() => props.onPress()}>
            <Text style={styles.btnTxt}>{props.title}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#0064bd',
        padding: 7,
        borderRadius: 10,
    },

    btnTxt: {
        color: '#FFFFFF',
        fontSize: 14
    }
});

export default ButtonComponent;
