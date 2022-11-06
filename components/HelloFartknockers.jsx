import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HelloFartknockers = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, fartknockers!</Text>
      <Text>Hello, again, fartknockers</Text>
      <Button
      title="Push Me Nav Button"
      onPress={() =>
        navigation.navigate('PushMe')
      }
      >
      </Button>
    </View>
  )
}
export default HelloFartknockers;