import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

function WatchList() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.titleText }>My watch list</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: 0,
      backgroundColor: '#ccc',
      alignItems: 'center',
    },
    titleText: {
        fontSize: 35, 
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginTop: 20,
        padding: 30,
    }
  });

  export default WatchList;