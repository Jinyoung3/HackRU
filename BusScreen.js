import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function BusScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Type of Bus:</Text>
        <TextInput
          style={styles.input}
        />
        <Text>Bus number:</Text>
        <TextInput
          style={styles.input}
        />
        <Text>Length of Break(in minutes)</Text>
        <TextInput
          style={styles.input}
        />
        <Text>Current stop</Text>
        <TextInput
          style={styles.input}
        />
        
        <Button title="Submit" />
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
  export default BusScreen;