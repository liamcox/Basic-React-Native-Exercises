import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "./components/ImageDetail"

const ImageScreen = () => {

    return (
        <View>
            <ImageDetail title="Forest" imageSource={require('../components/Images/forest.jpg')} score="8" />
            <ImageDetail title="Beach" imageSource={require('../components/Images/beach.jpg')} score="5"/>
            <ImageDetail title="Mountain" imageSource={require('../components/Images/mountain.jpg')} score="9"/>
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

export default ImageScreen;