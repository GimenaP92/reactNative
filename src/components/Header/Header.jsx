import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 

const Header = () => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  const handlePress = () => {
  const state = navigation.getState();
  const availableRoutes = state?.routeNames || [];

  if (availableRoutes.includes('HomeScreen')) {
    navigation.navigate('HomeScreen');
  } else {
    console.warn('HomeScreen no está disponible en este momento');
  }
};


  return (
    <View style={styles.container}>
      {canGoBack && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
          <Ionicons name="arrow-back" size={24} color="#f0eceb" />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8} style={styles.brand}>
        <Image
          source={require('../../../assets/icon.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>TravelToWorld</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36173d',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  backIcon: {
    padding: 8,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f0eceb',
  },
});

export default Header;
