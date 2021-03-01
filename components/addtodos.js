import React, { useState } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'

export default function Addtodos({addtodosHandler}) {
    const [todo, setTodo] = useState('');

    const changeHandler = (text) => {
        setTodo(text)
    }
    
    return (
        <View>
            <TextInput
                style={styles.inputfield}
                placeholder='todos..'
                onChangeText={changeHandler}
            />

            <TouchableOpacity onPress= {()=>addtodosHandler(todo)}>
                <Text style={styles.button}>Add Todos</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    inputfield: {
        margin: 16,
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    button: {
        height: 40,
        margin: 16,
        backgroundColor: 'coral',
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 18,
        color: '#fff'
        
    }


})