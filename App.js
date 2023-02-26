import * as React from 'react';
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
      <Button title="Log In" />
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
      <Text>Length of Break</Text>
      
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
});

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

export default App;