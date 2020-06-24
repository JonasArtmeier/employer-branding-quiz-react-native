import React, { useState } from 'react';
import { firebase } from '../../src/firebase/config';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { StyleSheet, Text, View } from 'react-native';

//// function ////
export default function Registration(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  /// Firebase Auth///
  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          userName,
        };
        const usersRef = firebase.firestore().collection('users');
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            props.navigation.navigate('Home', { user: data });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };
  /// Firebase End///

  return (
    <Container>
      <Logo style={styles.logo} />
      <View style={styles.container}>
        <Text style={styles.headline}>Registration</Text>
      </View>
      <View style={styles.inputFields}>
        <InputField
          label="Username"
          mode="outlined"
          value={userName}
          onChange={() => setUserName(props.InputField)}
        />
        <InputField
          label="E-eMail"
          mode="outlined"
          value={email}
          onChange={() => setEmail(props.InputField)}
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
          value={confirmPassword}
          onChange={() => setConfirmPassword(props.InputField)}
        />
      </View>
      <View style={styles.buttons}>
        <Button onPress={() => onRegisterPress()} label="Registration" />
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
