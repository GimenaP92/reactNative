// MainNavigator.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import StackNavigator from './StackNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import Header from '../Header/Header';
import HeaderDown from '../Header/HeaderDown';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { initSessionTable, getSession } from '../../db';
import { setUser } from '../../features/user/userSlice';

export default function MainNavigator() {
  const userEmail = useSelector(state => state.user.userEmail);
  const [checkingSession, setCheckingSession] = useState(true);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const bootstrap = async () => {
      try {
        await initSessionTable();
        const session = await getSession();
        if (session) {
          dispatch(setUser(session));
        }
      } catch (error) {
        console.error('Error loading session from SQLite:', error);
      } finally {
        setCheckingSession(false);
      }
    };
    bootstrap();
  }, [dispatch]);

  if (checkingSession) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#36173d" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        {userEmail ? <StackNavigator /> : <AuthStackNavigator />}
     
        {userEmail && <HeaderDown />}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70, // o lo que mida tu footer
    backgroundColor: '#EAEAEA',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
})
