import React, { useState } from 'react';
// import {} from 'react-native';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { StyleSheet, View, Text } from 'react-native';

//// function ////
export default function GameRoom(props) {
  const [gameName, setGameName] = useState('');
  const [description, setDescription] = useState('');
  const [questionConfig, setQuestionConfig] = useState('');
  const [questionTime, setQuestionTime] = useState('');
  const [questionDuration, setQuestionDuration] = useState('');

  return (
    <Container style={gameRoomStyles.container}>
      <View style={gameRoomStyles.firstBox}>
        <Text style={gameRoomStyles.text}>Create a new Game</Text>
      </View>
      <View style={gameRoomStyles.inputFields}>
        <InputField
          label="Name of the Game"
          mode="outlined"
          value={gameName}
          onChange={() => setGameName(props.InputField)}
        />
        {/* this should be a drop down */}
        <InputField
          label="please choose what is your motivation"
          mode="outlined"
          value={description}
          onChange={() => setDescription(props.InputField)}
        />
        {/* this should be a drop down */}
        <InputField
          label="who can create questions"
          value={questionConfig}
          onChange={() => setQuestionConfig(props.InputField)}
        />
        <InputField
          secureTextEntry={true}
          label="at what time the question will go live"
          value={questionTime}
          onChange={() => setQuestionTime(props.InputField)}
        />
        <InputField
          secureTextEntry={true}
          label="how long will it be live"
          value={questionDuration}
          onChange={() => setQuestionDuration(props.InputField)}
        />
      </View>
      <View style={gameRoomStyles.buttons}>
        <Button
          onPress={() => props.navigation.navigate('Home')}
          label="Create"
        />
      </View>
      <Footer />
    </Container>
  );
}

//// style-components ////
const gameRoomStyles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  firstBox: {
    flexShrink: 1,
    justifyContent: 'center',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'lightgrey',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  inputFields: {
    flex: 3,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  buttons: {
    flexShrink: 1,
    flexDirection: 'row',
    alignContent: 'space-around',
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
  },
});
