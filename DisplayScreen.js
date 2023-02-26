// DisplayScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DisplayScreen = ({ route, navigation }) => {
    const { inputValues } = route.params;
    return (
      <View style={styles.container}>
        <Text>Bus:{inputValues.input1}</Text>
      <Text>Bus Number:{inputValues.input2}</Text>
      <Text>Break time:{inputValues.input3}</Text>
      <Text>Location:{inputValues.input4}</Text>
      <Button
        title="I'm a driver"
        onPress={() => navigation.navigate('Log In')}
      />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DisplayScreen;
