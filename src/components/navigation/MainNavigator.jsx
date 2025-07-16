// MainNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import StackNavigator from './StackNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import Header from '../Header/Header';
import HeaderDown from '../Header/HeaderDown';
import { View, StyleSheet } from 'react-native';

export default function MainNavigator() {
  const userEmail = useSelector(state => state.user.userEmail);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        {userEmail ? <StackNavigator /> : <AuthStackNavigator />}
        <HeaderDown />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
