import React from 'react';
import { FlatList, View } from 'react-native';
import Card from '../common/Card';
import { useSelector } from 'react-redux';

const CategoryCards = ({ selectedCategory }) => {
  const categories = useSelector(state => state.shop.categories);

  if (!selectedCategory || !categories[selectedCategory]) return null;

  const data = categories[selectedCategory];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingBottom: 100 }} // deja espacio para el footer
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
  );
};

export default CategoryCards;
