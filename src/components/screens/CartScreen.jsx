import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../../features/cart/cartSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { addOrder } from '../../features/orders/ordersSlice';
import HeaderDown from '../Header/HeaderDown';

const FOOTER_HEIGHT = 70; 


const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userId = useSelector((state) => state.user.localId);

  const [loading, setLoading] = useState(false);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price ?? 150) * (item.quantity ?? 1),
    0
  );

  const handleCheckout = () => {
  setLoading(true);

  setTimeout(() => {
    dispatch(addOrder({
       userId,
      items: cartItems,
      total: totalPrice,
      date: new Date().toISOString(),
    }));
    dispatch(clearCart());
    setLoading(false);
    navigation.navigate('OrderHistoryScreen');
  }, 2000);
};


  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {/* Botón tachito en esquina superior derecha */}
      <TouchableOpacity style={styles.trashButton} onPress={() => handleRemove(item.id)}>
        <Ionicons name="trash-outline" size={20} color="red" />
      </TouchableOpacity>

      <Image source={{ uri: item.image1 }} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>${((item.price ?? 150) * (item.quantity ?? 1)).toFixed(2)}</Text>

        <View style={styles.controls}>
          <TouchableOpacity onPress={() => handleQuantityChange(item.id, (item.quantity ?? 1) - 1)}>
            <Ionicons name="remove-circle-outline" size={22} color="#333" />
          </TouchableOpacity>

          <Text style={styles.quantity}>{item.quantity ?? 1}</Text>

          <TouchableOpacity onPress={() => handleQuantityChange(item.id, (item.quantity ?? 1) + 1)}>
            <Ionicons name="add-circle-outline" size={22} color="#333" />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );

return (
  <View style={styles.container}>
    <Text style={styles.header}>Carrito de compras</Text>

    {cartItems.length === 0 ? (
      <>
        <Text style={styles.emptyText}>Aún no tienes productos en el carrito.</Text>
      </>
    ) : (
      <>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: FOOTER_HEIGHT + 100 }}
        />

        <View style={styles.footer}>
          <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
          <TouchableOpacity
            style={[styles.payButton, loading && { opacity: 0.6 }]}
            onPress={handleCheckout}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.payText}>Pagar ahora</Text>
            )}
          </TouchableOpacity>
        </View>
      </>
    )}

    {/* HeaderDown siempre visible */}
    <View style={styles.headerDownWrapper}>
      <HeaderDown />
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fff',  position: 'relative', },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  emptyText: { fontSize: 18, color: '#999' },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    position: 'relative',
  },
  image: { width: 100, height: 80, resizeMode: 'cover' },
  textContainer: { flex: 1, padding: 10, justifyContent: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  description: { fontSize: 14, color: '#555', marginVertical: 4 },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f0eceb',
    backgroundColor: '#36173d',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  quantity: { fontSize: 16, fontWeight: '600', color: '#333' },
  footer: {
  position: 'absolute',
  bottom: FOOTER_HEIGHT, // justo arriba del headerDown
  left: 0,
  right: 0,
  backgroundColor: '#eee',
  padding: 15,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 10,
},

  total: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },
  controlButton: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#333',
  },
  trashButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 2,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  payButton: {
    backgroundColor: '#ff4845',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  payText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
headerDownWrapper: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: FOOTER_HEIGHT,
  backgroundColor: '#EAEAEA',
  zIndex: 11,
},


});

export default CartScreen;
