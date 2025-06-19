// CardsList.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import Card from '../common/Card';
import { cardsData } from '../helpers/mockFlights';



const CardsList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulamos una carga como si viniera de una API o base de datos
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setCards(cardsData);
        setLoading(false);
      }, 2000); // espera 2 segundos simulando la carga
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <FlatList
      data={cards}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card
            id={item.id}
          title={item.title}
          description={item.description}
          image1={item.image1}
         onPress={() => navigation.navigate('DetailScreen', { id: item.id })}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardsList;
