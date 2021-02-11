import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

function Header() {
    return (
      <View style={ styles.header }>
        <Text style={{ color: 'white' }}>Hejhejh</Text>
        <Image source={require('./assets/logo.png')}
        style={{ width: 50, height: 50 }} />
      </View>
    )
  }

  const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        width: 10000,
        height: 100,
      }
    
    });

    export default Header;