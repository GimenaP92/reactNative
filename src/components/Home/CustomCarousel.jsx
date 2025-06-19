// SimpleCarousel.js
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const carouselItems = [
  {
    id: '1',
    title: "Explora Machu Picchu",
    text: "Una aventura inolvidable en Perú.",
    image: "https://media.gq.com.mx/photos/620e915c43f71a078a35533f/master/pass/playa.jpg"
  },
  {
    id: '2',
    title: "Vuelo a Cusco",
    text: "Viaja cómodo y seguro con nosotros.",
    image: "https://media.vogue.mx/photos/5c0712bceccb76ff7079fef1/master/pass/playas__2473.jpg"
  },
  {
    id: '3',
    title: "Hotel en Valle Sagrado",
    text: "Disfruta del lujo y la naturaleza.",
    image: "https://example.com/hotel3.jpg"
  }
];

const SimpleCarousel = () => {
  return (
    <FlatList
      data={carouselItems}
      horizontal
      pagingEnabled
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardText}>{item.text}</Text>
        </View>
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
