import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header/Header';
import StackNavigator from './src/components/navigation/StackNavigator';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import { initSessionTable } from './src/db';
import Toast from 'react-native-toast-message';



export default function App() {
  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        await initSessionTable();
        console.log('Tabla session creada o ya existente.');
      } catch (error) {
        console.error('Error al inicializar la base de datos:', error);
      }
    };

    initializeDatabase();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#36173d" />
        <Header />
        <StackNavigator />
              <Toast /> 
          </NavigationContainer>
    </Provider>
  );
}
