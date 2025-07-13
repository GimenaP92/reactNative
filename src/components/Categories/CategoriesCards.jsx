import React from 'react';
import { View } from 'react-native';
import Card from '../common/Card';
import { useSelector } from 'react-redux';

const CategoryCards = ({ selectedCategory }) => {
  const categories = useSelector(state => state.shop.categories);

  if (!selectedCategory || !categories[selectedCategory]) return null;

  const data = categories[selectedCategory];

  return (
    <View style={{ flex: 1 }}>
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          image1={item.image1}
          onPress={() => console.log(`${item.title} presionado`)}
        />
      ))}
    </View>
  );
};

export default CategoryCards;
