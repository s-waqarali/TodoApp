import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header'
import Todos from './components/todos'

export default function App() {
  return (

    <View style={styles.container}>

      {/* {header} */}

      <Header></Header>

      <View style={styles.container2}>

        {/* {Todos} */}

        <Todos></Todos>

      </View>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1:{
    margin: 10,
  }
});
