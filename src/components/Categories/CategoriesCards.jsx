import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Card from '../common/Card';
import { useSelector } from 'react-redux';

const subcategories = ['nacional', 'latam', 'europa'];

const CategoryCards = ({ selectedCategory }) => {
  const categories = useSelector(state => state.shop.categories);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  if (!selectedCategory || !categories[selectedCategory]) return null;

  const allItems = categories[selectedCategory];
  const filteredItems = selectedSubcategory
    ? allItems.filter(item => item.subcategory === selectedSubcategory)
    : allItems;

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
            title={item.title}
            description={item.description}
            image1={item.image1}
            onPress={() => console.log(`${item.title} presionado`)}
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
     backgroundColor:'#e0e0e0',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedButton: {
  backgroundColor: '#5a2b68',
  color:'fff',
},
selectedText: {
  color: '#fff',
},

subcategoryText: {
  color: '#black', 
  fontWeight: 'bold',
  fontSize: 14,
  
},

});

export default CategoryCards;
