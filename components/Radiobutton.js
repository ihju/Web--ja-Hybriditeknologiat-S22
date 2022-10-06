import { Text, View, Pressable } from "react-native";
import React, { useState } from 'react';
import StyleSheet from '../Styles/Styles';



export default function Radiobutton({ gender, onPress }) {
    const [value, setValue] = useState(null);


    function handlePress(selected) {
        setValue(selected);
        onPress(selected);
    }
    return (
        <>
            {
                gender.map((item) => (
                    <View key={item.value} style={StyleSheet.buttonContainer}>
                        <Text style={StyleSheet.label}>{item.label}</Text>
                        <Pressable style={StyleSheet.circle} onPress={() => handlePress(item.value)}>
                            {value === item.value && <View style={StyleSheet.checkedCircle} />}
                        </Pressable>
                    </View>
                ))
            }
        </>
    );

}


