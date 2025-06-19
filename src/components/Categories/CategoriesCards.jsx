import React from 'react';
import { FlatList, View } from 'react-native';
import Card from '../common/Card';
import { mockCategories } from '../helpers/mockCategories';


const CategoryCards = ({ selectedCategory }) => {
  if (!selectedCategory) return null;

  const data = mockCategories[selectedCategory];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
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

export default CategoryCards;
