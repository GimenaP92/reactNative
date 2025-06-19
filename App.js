import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header/Header';
import StackNavigator from './src/components/navigation/StackNavigator';
import HeaderDown from './src/components/Header/HeaderDown';
import { StatusBar } from 'react-native';




export default function App() {
  return (
  <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#36173d" />
      <Header />
    <StackNavigator />
    <HeaderDown />
    </NavigationContainer>
  );
}
