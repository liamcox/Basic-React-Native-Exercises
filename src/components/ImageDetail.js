import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = ({title}) => {

    return (
        <View>
            <Image source={require('../../assets/beach.jpg')}/>
            <Text style={styles.textStyle}>
                {title}
            </Text>
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