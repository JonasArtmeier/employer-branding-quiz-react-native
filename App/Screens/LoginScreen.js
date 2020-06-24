import React, { useState } from 'react';
// import { firebase } from '../../firebase/config'
import Container from '../components/Container';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { StyleSheet, Text, View } from 'react-native';

//// function ////
export default function Login(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Logo style={styles.logo} />
      <View style={styles.container}>
        <Text style={styles.headline}>LOGIN:</Text>
      </View>
      <View style={styles.inputFields}>
        <InputField
          label="Username"
          mode="outlined"
          value={userName}
          onChange={() => setUserName(props.InputField)}
        />
        <InputField
          secureTextEntry={true}
          label="Password"
          visible-password="no"
          value={password}
          onChange={() => setPassword(props.InputField)}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => props.navigation.navigate('Home')}
          title="Solid Button"
          label="Login"
        />
        <Button
          onPress={() => props.navigation.navigate('Registration')}
          label="Registration"
        />
      </View>
      <Footer />
    </Container>
  );
}

//// style-components ////
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  logo: {
    display: 'flex',
  },
  inputFields: {
    flex: 1,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
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
