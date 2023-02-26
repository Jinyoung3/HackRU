/*import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="I'm a driver"
        onPress={() => navigation.navigate('Log In')}
      />
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
function LogInScreen({ navigation }) {
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
      title="Log In"
      onPress={() => navigation.navigate('Bus')} />
      <Button
        title="I don't have an account"
        onPress={() => navigation.navigate('Sign Up')} />
    </View>
  );

  
}

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
        onPress={() => navigation.navigate('Bus')} />
    </View>
  );
}
  
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



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
	  <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Log In" component={LogInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Bus" component={BusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonScreen from './ButtonScreen';
import DisplayScreen from './DisplayScreen';
import HomeScreen from './HomeScreen';
import InputScreen from './inputScreen';
import LogInScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
	  <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }} initialParams={{ inputValues: {} }}  />
	  <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
		<Stack.Screen name="Log In" component={LogInScreen} />
		<Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Display" component={DisplayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

