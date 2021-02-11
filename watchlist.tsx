import React from 'react';
import {  FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, } from 'react-native';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

function WatchList() {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    
      return (
        <SafeAreaView style={styles.container}>
            <Text style={ styles.titleText }>My watch list</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
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
    },
    title: {
        fontSize: 20,
        color: 'white',
    },
  });

  export default WatchList;