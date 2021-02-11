import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, } from 'react-native';
import Button from 'react-native-button';

const image = { uri: "assets/bg-home.png" };

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
        onPress={() => handlePress()}>
        Search movie
      </Button>    
    )
  }

  function handlePress() {
      alert('button clicked');
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
        marginTop: 30,
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
        fontSize: 30, 
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    video: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 100,
    }
});

export default HomeScreen;