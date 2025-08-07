// OffersCarousel.js
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const offers = [
  {
    id: '1',
    title: "Promoción: Asistencia al Viajero",
    description: "Cobertura médica completa durante tu viaje.",
    image: "https://cdn-icons-png.flaticon.com/512/2907/2907255.png",
  },
  {
    id: '2',
    title: "Oferta: Seguro de Viaje 20% Off",
    description: "Viaja tranquilo con la mejor protección.",
    image: "https://cdn-icons-png.flaticon.com/512/3079/3079023.png",
  },
  {
    id: '3',
    title: "Descuento en Tours Guiados",
    description: "Explora con guías expertos y ahorra hasta 15%.",
    image: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
  },
  {
    id: '4',
    title: "Oferta Flash: Equipaje Gratis",
    description: "Aprovecha equipaje extra sin costo adicional.",
    image: "https://cdn-icons-png.flaticon.com/512/2717/2717152.png",
  },
];

const OffersCarousel = () => {
  return (
    <FlatList
      data={offers}
      horizontal
      pagingEnabled
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
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
     margin:15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 7,
    alignItems: 'center',
    
  },
  cardImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
    marginBottom: 6,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default OffersCarousel;
