import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

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
    <View
      style={styles.container}>
      <Text>Hello, fartknockers!</Text>
      <Text>You clicked {count} times!</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="Click me!"
      />
    </View>
  )
}
export default HelloWorld;