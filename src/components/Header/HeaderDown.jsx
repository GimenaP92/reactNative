import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FOOTER_HEIGHT = 70;

const HeaderDown = () => {
  const navigation = useNavigation();

  const handleOrdersPress = () => {
    navigation.navigate('OrderHistoryScreen')
  }
  
  const handleCartPress = () => {
    navigation.navigate('CartScreen');
  };

  const handleAccountPress = () => {
    navigation.navigate('MyAccountScreen');
  };



  return (
    <View style={styles.footer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleOrdersPress}>
          <View style={styles.iconWrapper}>
            <Ionicons name="bag-outline" size={28} color="#333" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleCartPress}>
          <View style={styles.iconWrapper}>
            <Ionicons name="cart-outline" size={28} color="#333" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleAccountPress}>
          <View style={styles.iconWrapper}>
            <Ionicons name="person-outline" size={28} color="#333" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: FOOTER_HEIGHT,
    backgroundColor: '#EAEAEA',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    // Sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra Android
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconWrapper: {
    borderWidth: 2,
    borderColor: '#8f8e8e',
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#fff',
    // Sombra iOS para el iconWrapper si querés más profundidad
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra Android
    elevation: 5,
  },
});

export { FOOTER_HEIGHT };
export default HeaderDown;
