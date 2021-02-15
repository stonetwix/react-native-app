import React from 'react';
import { StyleSheet, View, Image, } from 'react-native';

const image = { uri:'https://github.com/stonetwix/react-native-app/blob/master/assets/logo-movieapp.png?raw=true'};
function Header() {
    return (
      <View style={ styles.header }>     
        <Image source={image}
        style={{...styles.header, width: 150, height: 50, marginTop: 40}}/>
      </View>
    )
  }

  const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 100,
      }
    
    });

    export default Header;