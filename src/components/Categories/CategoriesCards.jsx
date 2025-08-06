import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Card from '../common/Card';
import { useGetProductsByCategoryQuery } from '../../services/shop/shopApi';

const subcategories = ['nacional', 'latam', 'europa'];

const CategoryCards = ({ selectedCategory }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const { data: products, isLoading, error } = useGetProductsByCategoryQuery(selectedCategory);

  if (!selectedCategory) return null;
  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error al cargar productos</Text>;
  if (!products) return <Text>No hay productos</Text>;

  const filteredItems = selectedSubcategory
    ? products.filter(item => item.subcategory === selectedSubcategory)
    : products;

  return (
    <View>
      <View style={styles.subcategoryContainer}>
        {subcategories.map(sub => (
          <TouchableOpacity
            key={sub}
            style={[
              styles.subcategoryButton,
              selectedSubcategory === sub && styles.selectedButton
            ]}
            onPress={() => setSelectedSubcategory(sub)}
          >
            <Text
              style={[
                styles.subcategoryText,
                selectedSubcategory === sub && styles.selectedText
              ]}
            >
              {sub.charAt(0).toUpperCase() + sub.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <Card
              id={item.id}
              subcategory={item.subcategory}  
              title={item.title}
              price={item.price}
              description={item.description}
              image1={item.image1}
            />

        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  subcategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
  },
  subcategoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedButton: {
    backgroundColor: '#5a2b68',
  },
  selectedText: {
    color: '#fff',
  },
  subcategoryText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CategoryCards;
