import React, { useState } from 'react';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { StyleSheet, Text, View } from 'react-native';

//// function ////
export default function Register(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');

  return (
    <Container>
      <Logo style={styles.logo} />
      <View style={styles.container}>
        <Text style={styles.headline}>Register</Text>
      </View>
      <View style={styles.inputFields}>
        <InputField
          label="Username"
          mode="outlined"
          value={userName}
          onChange={() => setUserName(props.InputField)}
        />
        <InputField
          label="E-Mail"
          mode="outlined"
          value={mail}
          onChange={() => setMail(props.InputField)}
        />
        <InputField
          secureTextEntry={true}
          label="Password"
          visible-password="no"
          value={password}
          onChange={() => setPassword(props.InputField)}
        />
        <InputField
          secureTextEntry={true}
          label="confirm the password"
          visible-password="no"
          value={password}
          onChange={() => setPassword(props.InputField)}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => props.navigation.navigate('Home')}
          label="Register"
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
