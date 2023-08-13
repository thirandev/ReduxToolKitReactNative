import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/counterSlice';
import { RootState } from './redux/store';

const Counter = () => {

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>The count is: {count}</Text>
            <View style={{ margin: 10 }} />
            <Button title='Increase' onPress={() => {
                dispatch(increment());
            }} />
            <View style={{ margin: 5 }} />
            <Button title='Decrease' onPress={() => {
                dispatch(decrement());
            }} />
        </View>
    );
}

export default Counter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexBasis: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    textContainer: {
        fontSize: 20,
        fontWeight: '700'
    },
});













