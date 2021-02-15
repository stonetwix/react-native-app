import React, { useEffect, useState } from 'react';
import {  FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, Image } from 'react-native';


function WatchList() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
    
  return (
    <SafeAreaView style={styles.container}>
        <Text style={ styles.titleText }>My watch list</Text>
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
        <Text style={styles.item}>{item.title}</Text>
      )}
    />
    </SafeAreaView>
  );
}

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    titleText: {
        fontSize: 35, 
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginTop: 20,
        padding: 30,
    },
    item: {
        backgroundColor: '#4d4964',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        color: 'white',
        fontSize: 15,
    },
  });

  export default WatchList;