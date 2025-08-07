import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGetProductsByCategoryQuery } from '../../services/shop/shopApi';

const { width: screenWidth } = Dimensions.get('window');

const subcategories = ['nacional', 'latam', 'europa'];

const SimpleCarousel = ({ selectedCategory = 'paquetes' }) => {
  const navigation = useNavigation();
  const { data: products, isLoading, error } = useGetProductsByCategoryQuery(selectedCategory);

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error al cargar productos</Text>;
  if (!products) return <Text>No hay productos</Text>;

  // Tomás 3 productos por subcategoría
  const carouselItems = subcategories.flatMap(sub =>
    products
      .filter(p => p.subcategory === sub)
      .slice(0, 3)
  );

  return (
    <FlatList
      data={carouselItems}
      horizontal
      pagingEnabled
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('DetailScreen', {
            id: item.id,
            title: item.title,
            price: item.price,
            description: item.description,
            image1: item.image1
          })}
        >
          <Image source={{ uri: item.image1 }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardText}>{item.description}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: screenWidth * 0.75,
    marginHorizontal: screenWidth * 0.125 / 2,
    padding: 15,
    margin:15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 7,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
  }
});

export default SimpleCarousel;
