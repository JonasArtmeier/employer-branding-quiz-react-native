import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
// import {} from 'react-native';

// import { StyleSheet } from 'react-native';
// import HomeScreen from './App/Screens/HomeScreen';

import Login from './App/Screens/LoginScreen';
import Home from './App/Screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);

// const containerStyles = StyleSheet.create({});

export default App;
