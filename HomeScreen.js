import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ route }) => {
  const { inputValues } = route.params;
  const [inputs, setInputs] = useState([{...inputValues}]);
  const navigation = useNavigation();

  const handleAdd = () => {
    setInputs([...inputs, {...inputValues}]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={inputs}
        renderItem={({ item }) => (
          <View style={styles.inputContainer}>
            <Text>Bus: {item.input1}</Text>
            <Text>Bus Number: {item.input2}</Text>
            <Text>Break time: {item.input3}</Text>
            <Text>Location: {item.input4}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Add" onPress={handleAdd} />
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
  inputContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    width: '80%',
  },
});

export default HomeScreen;
