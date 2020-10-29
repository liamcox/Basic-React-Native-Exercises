import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const ColorScreen = () => {
const [colors, setColors] = useState([])
    return (
        <View>
            <Text style={styles.textStyle}>Color Screen</Text>
            <Button title="Add Color" onPress={() => {setColors([...colors, randomRgb()])}}/>
            <View style={{ height: 100, width: 100, backgroundColor: randomRgb()}}></View>
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    textStyle1: {
        fontSize: 20,
    },
});

export default ColorScreen;