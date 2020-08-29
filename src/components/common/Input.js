import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { CardSection } from './';



const Input = (prop) => {
  const { label, onChangeText, placeholder, secureTextEntry } = prop;
  return (
    <CardSection>
      <Text style={styles.textStyle}>{label}</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        onChangeText={onChangeText}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
      />
    </CardSection>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    alignSelf: 'center',
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    flex: 2,
    lineHeight: 23,
    paddingRight: 20,
    fontSize: 20
  }
});


export { Input };
