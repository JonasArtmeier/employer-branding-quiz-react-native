import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
// import {} from 'react-native';

// import { StyleSheet } from 'react-native';
// import HomeScreen from './App/Screens/HomeScreen';

import Login from './App/Screens/LoginScreen';
import Registration from './App/Screens/RegistrationScreen';
import Home from './App/Screens/HomeScreen';
import CreateGame from './App/Screens/CreateGameScreen';
import GameRoom from './App/Screens/GameRoomScreen';

import { decode, encode } from 'base-64';
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  if (loading) {
    return <></>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {user ? (
          <Stack.Screen name="Home">
            {(props) => <Home {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registration} />

            <Stack.Screen name="CreateGame" component={CreateGame} />
            <Stack.Screen name="GameRoom" component={GameRoom} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const containerStyles = StyleSheet.create({});
