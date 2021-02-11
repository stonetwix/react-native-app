import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './homescreen';
import WatchList from './watchlist';
import Header from './header';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'ios-home';

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Watchlist') {
              iconName = focused ? 'ios-eye' : 'ios-eye-outline';
            }
            
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#7a4652',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Watchlist" component={WatchList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}