import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { mockCartItems } from '../helpers/mockCart';

const CartScreen = () => {
  // Simulamos un precio fijo por ítem para demo
  const pricePerItem = 150;
  const totalPrice = mockCartItems.length * pricePerItem;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image1 }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>${pricePerItem}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tu carrito de compras</Text>
      <FlatList
        data={mockCartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>Total: ${totalPrice}</Text>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payText}>Pagar ahora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  image: { width: 100, height: 80, resizeMode: 'cover' },
  textContainer: { flex: 1, padding: 10, justifyContent: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  description: { fontSize: 14, color: '#555', marginVertical: 4 },
  price: { fontSize: 16, fontWeight: '600', color: '#ff4845' },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eee',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  payButton: {
    backgroundColor: '#ff4845',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  payText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default CartScreen;
