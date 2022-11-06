import React, { useState } from "react";
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function PushMe({ navigation }) {
  const [num, setNum] = useState(0);

  function popup() {
    alert('told you so')
  };

  return (
    <View>
    <Text>You farted {num} times!</Text>
    <Button
      title="Fart"
      onPress={() => setNum(num + 1)}>
    </Button>
    <Button
      title="subtract one fart"
      onPress={() => setNum(num - 1)}>
      </Button>

      <Button
      title="Alert"
      onPress={popup}
      >
      </Button>
      <Button
        title="navigate home"
        navigation={navigation}
        onPress={() => {
          navigation.navigate('HelloFartknockers')
        }}></Button>
    </View>
  )
};