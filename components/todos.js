import React, { useState } from 'react'
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Addtodos from './addtodos'

export default function Todos() {
    const [todos, setTodos] = useState([
        { todo: 'do exercise', key: '1' },
        { todo: 'do breakfast', key: '2' },
        { todo: 'go office', key: '3' },
    ]);

    const pressHandler = (key) => {
        setTodos(
            (prevTodos) => {
                return prevTodos.filter(todo => todo.key != key);
            }
        )
    }

    const addtodosHandler = (todo) => {
        if (todo.length > 3){
            setTodos(
                (prevTodos) => {
                    return [
                        { todo: todo, key: Math.random().toString() },
                        ...prevTodos
                    ]
                }
            )
        }
        else{
            Alert.alert('Oops!','Todos must be more than 3 characters long',[{text: 'OK'}])
        }
        
    }
    return (
        <View>
            {/* {Form} */}
            <Addtodos addtodosHandler= {addtodosHandler}></Addtodos>

            <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item.key)} >
                        <Text style={style.todolist}>{item.todo}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}

const style = StyleSheet.create({
    todolist: {
        margin: 16,
        padding: 16,
        fontSize: 18,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10

    }
})

