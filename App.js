import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import PushMe from './components/PushMe';
import HelloFartknockers from './components/HelloFartknockers';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const HelloWorld = () => {
  const [count, setCount] = useState(0);

  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="HelloFartknockers"
          component={HelloFartknockers}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="PushMe" component={PushMe} options={{ title: 'Fart Counter'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default HelloWorld;