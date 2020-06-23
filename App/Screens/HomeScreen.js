import React from 'react';
// import {} from 'react-native';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { StyleSheet, View, Text } from 'react-native';

//// function ////
export default function Home(props) {
  return (
    <Container>
      <View style={homeStyles.firstBox}>
        <Text style={homeStyles.text}>Weclone : Username{'\n'} Statistics</Text>
      </View>
      <View style={homeStyles.firstBox}>
        <Text style={homeStyles.text}>Here can be your ad</Text>
      </View>
      <View>
        <Text style={homeStyles.text}>Your Rooms</Text>
      </View>
      <View style={homeStyles.firstBox}>
        <Text style={homeStyles.text}>Game 1</Text>
      </View>
      <View style={homeStyles.firstBox}>
        <Text style={homeStyles.text}>Game 2</Text>
      </View>
      <View style={homeStyles.firstBox}>
        <Text style={homeStyles.text}>Game 3</Text>
      </View>
      <View style={homeStyles.buttons}>
        <Button
          onPress={() => props.navigation.navigate('CreateGame')}
          label="CreateGame"
        />
      </View>
      <Footer />
    </Container>
  );
}

//// style-components ////
const homeStyles = StyleSheet.create({
  firstBox: {
    flex: 1,
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
  buttons: {
    flex: 1,
    flexShrink: 1,
    flexDirection: 'row',
    alignContent: 'space-around',
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
  },
});
