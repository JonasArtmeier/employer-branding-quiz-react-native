import React from 'react';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import InputField from '../components/InputField';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Container>
      <Logo />
      <View style={styles.container}>
        <Text style={styles.headline}>LOGIN:</Text>
      </View>
      <InputField />
      <Footer />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, display: 'flex', alignItems: 'center' },
  headline: {
    fontWeight: 'bold',
    fontSize: 40,
  },
});
