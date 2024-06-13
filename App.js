import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routs from './src/routs';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#4AB9D4" barStyle='light-content' />
      <Routs />
    </NavigationContainer>
  )
}