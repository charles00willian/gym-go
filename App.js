import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <TabNavigation/>
    </NavigationContainer>
  );
}
