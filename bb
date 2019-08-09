import React from 'react';
import { StyleSheet, Text, View, Header } from 'react-native';

import Banana from './src/components/Banana';
import GreetingGroup from './src/components/GreetingGroup'
import BlinkApp from './src/components/BlinkApp'
import StyleApp from './src/components/StyleApp'
import SizeApp from './src/components/SizeApp'
import Header from './src/components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native!</Text>
      <Text>By. 정용원</Text>
      <Header style={{color:'red', fontSize:100}}>안녕하세요</Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
