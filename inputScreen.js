import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const InputScreen = ({ navigation }) => {
  const [inputValues, setInputValues] = useState({
    input1: 'd',
    input2: 'd',
    input3: 'd',
    input4: 'd',
  });

  const handleInputChange = (name, value) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleButtonPress = () => {
    navigation.navigate('Home', {inputValues});
  };

  return (
    <View style={styles.container}>
        <Text>Type of Bus:</Text>
      <TextInput
      defaultValue='none'
        style={styles.input}
        placeholder="Enter value 1"
        onChangeText={(value) => handleInputChange('input1', value)}
        value={inputValues.input1}
      />
      <Text>Bus Number:</Text>
      <TextInput
      defaultValue='none'
        style={styles.input}
        placeholder="Enter value 2"
        onChangeText={(value) => handleInputChange('input2', value)}
        value={inputValues.input2}
      />
      <Text>Length of Break(in minutes):</Text>
      <TextInput
      defaultValue='none'
        style={styles.input}
        placeholder="Enter value 3"
        onChangeText={(value) => handleInputChange('input3', value)}
        value={inputValues.input3}
      />
      <Text>Current stop:</Text>
      <TextInput
      defaultValue='none'
        style={styles.input}
        placeholder="Enter value 4"
        onChangeText={(value) => handleInputChange('input4', value)}
        value={inputValues.input4}
      />
      <Button title="Submit" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    width: '80%',
  },
});

export default InputScreen;
