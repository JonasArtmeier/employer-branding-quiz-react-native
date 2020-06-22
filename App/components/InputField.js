import React, { Component, useState } from 'react';
import { TextInput, Stylesheet } from 'react-native';

const InputFieldStyles = StyleSheet.create({
  container: { flex: 1 },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default function InputField(props) {
  const [text, setText] = useState(props.label);

  return (
    <TextInput
      label="Email"
      value={this.state.text}
      onChangeText={(text) => setText({ text })}
    />
  );
}
