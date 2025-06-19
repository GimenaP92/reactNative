import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import CartScreen from '../screens/CartScreen';
import CategoryScreen from '../screens/CategoriesScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="MyAccountScreen" component={MyAccountScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
