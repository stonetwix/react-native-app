import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

function WatchList() {
    return (
      <View style={ styles.container }>
        <Text>WatchList</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: 0,
      backgroundColor: '#ccc',
      alignItems: 'center',
    }
  });

  export default WatchList;