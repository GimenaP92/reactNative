import React from 'react'; 
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CategoryButtons = ({ onSelectCategory }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => onSelectCategory('vuelos')}>
          <View style={styles.iconWrapper}>
            <Ionicons name="airplane-outline" size={28} color="#333" />
          </View>
        </TouchableOpacity>
        <Text style={styles.label}>Vuelos</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => onSelectCategory('alojamientos')}>
          <View style={styles.iconWrapper}>
            <Ionicons name="bed-outline" size={28} color="#333" />
          </View>
        </TouchableOpacity>
        <Text style={styles.label}>Alojamientos</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => onSelectCategory('paquetes')}>
          <View style={styles.iconWrapper}>
            <Ionicons name="briefcase-outline" size={28} color="#333" />
          </View>
        </TouchableOpacity>
        <Text style={styles.label}>Paquetes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    flexDirection: 'row',    
    paddingVertical: 20,
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
  label: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
});

export default CategoryButtons;
