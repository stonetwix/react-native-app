import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <View style={ styles.container }>
      <Text style={{ fontSize: 50, fontWeight: 'bold' }}>Home!</Text>
    </View>
  );
}

function Search() {
  return (
    <View style={ styles.container }>
      <Text>Search your favourite movie</Text>
      <TextInput
        style={{
          height: 40,
          width: 250,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 30,
          paddingLeft: 20,
          backgroundColor: 'white',
        }}
        defaultValue=""
      />
    </View>
  );
}

function WatchList() {
  return (
    <View style={ styles.container }>
      <Text>WatchList</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'ios-home';

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search-circle' : 'ios-search-circle-outline';
            } else if (route.name === 'Watchlist') {
              iconName = focused ? 'ios-eye' : 'ios-eye-outline';
            }
            
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Watchlist" component={WatchList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },

});