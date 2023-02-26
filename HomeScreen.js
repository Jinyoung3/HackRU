import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const HomeScreen = ({ route }) => {
    const { inputValues } = route.params;
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>Bus: {inputValues.input1}</Text>
        <Text>Bus Number: {inputValues.input2}</Text>
        <Text>Break time: {inputValues.input3}</Text>
        <Text>Location: {inputValues.input4}</Text>
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
export default HomeScreen;