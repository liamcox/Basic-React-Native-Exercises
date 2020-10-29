import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
    let [counter, setCounter] = useState(0)

    return (
        <View>
            <Button title="Increase" onPress={() => setCounter(counter + 1)}/>
            <Button title="Decrease" onPress={() => setCounter(counter - 1)}/>
            <Text style={styles.textStyle}>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    textStyle1: {
        fontSize: 20,
    },
});

export default CounterScreen;