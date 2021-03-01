import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style = {style.container}>
            { <Text style = {style.header}>
                Todos
            </Text> }
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        textAlign: 'center',
        padding: 20,
        margin: 22,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
        
        
    },
    container: {
        height: 85,
        backgroundColor: 'coral',
        alignItems: 'center'
    }
})
