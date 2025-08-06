import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ id, title, description, price, image1 }) => {
  const navigation = useNavigation();

const handlePress = () => {
  navigation.navigate('DetailScreen', {
    id,
    title,
    price,
    description,
    image1
  });
};


  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image1 }} style={[styles.image, styles.imageFront]} />
              </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Ver más</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    height: 450,
    marginBottom: 20,
    margin:10
  },
  imageContainer: {
    position: 'relative',
    height: 450,
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  imageFront: {
    opacity: 1,
  },
  imageBack: {
    opacity: 0, // Puedes implementar animación o toggle aquí si lo necesitas
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  description: {
    marginTop: 6,
    fontSize: 12,
    color: '#fff',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
