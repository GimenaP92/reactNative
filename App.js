import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header/Header';
import StackNavigator from './src/components/navigation/StackNavigator';
import HeaderDown from './src/components/Header/HeaderDown';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; 
import store, { persistor } from './src/store';


export default function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#36173d" />
        <Header />
        <StackNavigator />
        <HeaderDown />
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
