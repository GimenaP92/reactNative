import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CategoryCards from '../Categories/CategoriesCards';

const CategoryScreen = ({ route }) => {
  const { category } = route.params;

  return (
    <View style={styles.container}>
    
      <CategoryCards selectedCategory={category} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
 
});

export default CategoryScreen;
