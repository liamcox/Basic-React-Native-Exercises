import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Hi there! Bye there!</Text>
      <Button 
        onPress={() => navigation.navigate("Components")} 
        title="Go to Components Demo" 
      />
      <Button title="Go to List Demo" onPress={() => navigation.navigate("List")} />
      <Button title="Go to Image" onPress={() => navigation.navigate("Image")} />
      <Button title="Go to Counter" onPress={() => navigation.navigate("Counter")} />
      <Button title="Go to Color" onPress={() => navigation.navigate("Color")} />
      <Button title="Go to Square" onPress={() => navigation.navigate("Square")} />
      <Button title="Go to Text Screen" onPress={() => navigation.navigate("Text")} />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  view: {
    paddingTop: 10
  }
});

export default HomeScreen;
