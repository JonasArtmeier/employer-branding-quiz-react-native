import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
// import {} from 'react-native';

// import { StyleSheet } from 'react-native';
// import HomeScreen from './App/Screens/HomeScreen';

import Login from './App/Screens/LoginScreen';
import Register from './App/Screens/RegisterScreen';
import Home from './App/Screens/HomeScreen';
import CreateGame from './App/Screens/CreateGameScreen';
import GameRoom from './App/Screens/GameRoomScreen';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateGame" component={CreateGame} />
      <Stack.Screen name="GameRoom" component={GameRoom} />
    </Stack.Navigator>
  </NavigationContainer>
);

// const containerStyles = StyleSheet.create({});

export default App;
