import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // ajusta según tu librería

export default function CameraIcon() {
  return (
    <View style={styles.iconContainer}>
      <Icon name="camera" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
