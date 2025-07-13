import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const iconMap = {
  vuelos: 'airplane-outline',
  alojamientos: 'bed-outline',
  paquetes: 'briefcase-outline',
};

const CategoryButtons = ({ categories, onSelectCategory }) => {
  return (
    <View style={styles.container}>
      {categories.map(cat => (
        <View style={styles.iconContainer} key={cat}>
          <TouchableOpacity onPress={() => onSelectCategory(cat)}>
            <View style={styles.iconWrapper}>
              <Ionicons name={iconMap[cat] || 'help-circle-outline'} size={28} color="#333" />
            </View>
          </TouchableOpacity>
          <Text style={styles.label}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Text>
        </View>
      ))}
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
});

export default CategoryButtons;
