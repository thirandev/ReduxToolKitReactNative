import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearState, incrementByAmount } from './redux/counterSlice';
import { RootState } from './redux/store';

const Display = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch()
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#289483',
            }}>
            <Text style={{ fontSize: 40, fontWeight: '600', color: 'white' }}>
                Count : {count}
            </Text>
            <Button title='Increment by Value' onPress={() => dispatch(incrementByAmount(5))} />
            <View style={{ margin: 5 }} />
            <Button title='Clear State' onPress={() => dispatch(clearState())} />
        </View>
    );
};

export default Display;
