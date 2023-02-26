import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SignUpScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
        />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('Input')} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 150,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    submitButton:{
      alignSelf: 'flex-end',
      top:0,
    }
  });
  export default SignUpScreen;