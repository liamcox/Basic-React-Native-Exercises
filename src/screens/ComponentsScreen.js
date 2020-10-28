import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentsScreen = () => {
    const name = "Liam";

    return (
        <View>
            <Text style={styles.textStyle}>
                Getting started with React Native
            </Text>
            <Text style={styles.textStyle1}>My name is {name}</Text>
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

export default ComponentsScreen;
