import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setname] = useState('')

    return (
        <View>
            <TextInput 
            style= {styles.input}
            autoCapitalize ="none"
            autoCorrect={false} 
            value= {name} 
            onChangeText= {(newValue) => setname(newValue)}
            />

        <Text>My name is {name}</Text>
        {name.length < 4 ? <Text>Name must be 4 characters long</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
   input: {
       margin: 15,
       borderColor: 'black',
       borderWidth: 1
   }
});

export default TextScreen;