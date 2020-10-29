import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = ({title, imageSource, score}) => {

    return (
        <View>
            <Text style={styles.textStyle}>{title}</Text>
            <Text style={styles.textStyle}>Image Score: {score}</Text>
            <Image source={imageSource}/>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
    },
    textStyle1: {
        fontSize: 20,
    },
});

export default ImageDetail;