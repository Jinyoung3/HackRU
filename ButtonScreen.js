// ButtonScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ButtonScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
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

export default ButtonScreen;
