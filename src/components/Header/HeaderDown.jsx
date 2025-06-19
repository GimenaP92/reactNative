import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HeaderDown = ({ onAction }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => onAction('buscar')}>
          <View style={styles.iconWrapper}>
            <Ionicons name="search-outline" size={28} color="#333" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <View style={styles.iconWrapper}>
            <Ionicons name="cart-outline" size={28} color="#333" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MyAccountScreen')}>
          <View style={styles.iconWrapper}>
            <Ionicons name="person-outline" size={28} color="#333" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',    
    paddingVertical: 30,
    justifyContent: 'space-around',
    backgroundColor: '#EAEAEA',
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
    // Sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra Android
    elevation: 5,
  },
});

export default HeaderDown;
