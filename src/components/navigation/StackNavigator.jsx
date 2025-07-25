import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen, CategoryScreen, MyAccountScreen, CartScreen, DetailScreen, OrderHistoryScreen, LoginScreen, RegisterScreen, EditProfileScreen }from '../screens';



const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="MyAccountScreen" component={MyAccountScreen} />
       <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
       <Stack.Screen name="LoginScreen" component={LoginScreen} />
       <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
