import React from "react"
import { View, Text, StyleSheet, FlatList} from "react-native"

const ListScreen = () => {
    let friends = [
        {name: 'Friend #1', age:22, key:"1"},
        {name: 'Friend #2', age:34, key:"2"},
        {name: 'Friend #3', age:25, key:"3"},
        {name: 'Friend #4', age:43, key:"4"},
        {name: 'Friend #5', age:21, key:"5"},
        {name: 'Friend #6', age:22, key:"6"},
        {name: 'Friend #7', age:33, key:"7"},
        {name: 'Friend #8', age:45, key:"8"},
        {name: 'Friend #9', age:55, key:"9"},
        {name: 'Friend #10', age:47, key:"10"},
    ]
    

    return  <FlatList 
                data={friends}
                renderItem={({ item }) => {
                    return (
                    <View>
                        <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
                    </View>
                    )
                }} 
                    />
}

const styles = StyleSheet.create({
    textStyle : {
        marginVertical: 50
    }
})

export default ListScreen