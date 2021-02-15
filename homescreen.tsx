import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import Button from 'react-native-button';
import getMoviesFromApi from './App';

const image = { uri: "https://github.com/stonetwix/react-native-app/blob/master/assets/bg-home.png?raw=true" };

function HomeScreen() {
    return (
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.container}>
                <Text style={styles.titleText}>Welcome to your new favourite Movie App!</Text>
                <TextInput style={styles.inputField}
                defaultValue=""
                />
                <SearchButton />
            </View>
        </ImageBackground>     
    );
  }

  function SearchButton() {
    return (
        <Button
          style={styles.button}
          styleDisabled={{color: 'red'}}
          >
          Search movie
      </Button>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputField: {
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        paddingLeft: 20,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: 'black',
        color: 'white',
        padding: 10,
        marginTop: 10,
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: 40, 
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
        padding: 30,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
});

export default HomeScreen;