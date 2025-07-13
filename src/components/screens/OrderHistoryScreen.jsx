import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const OrderHistoryScreen = () => {
  const orders = useSelector(state => state.orders.list);

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image1 }} style={styles.image} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productQuantity}>x{item.quantity}</Text>
      </View>
    </View>
  );

  const renderOrder = ({ item }) => (
    <View style={styles.orderContainer}>
      <Text style={styles.orderDate}>Date: {new Date(item.date).toLocaleString()}</Text>
      <FlatList
        data={item.items}
        keyExtractor={product => product.id.toString()}
        renderItem={renderProduct}
      />
      <Text style={styles.orderTotal}>Total: ${item.total.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ordenes de compra</Text>
      <FlatList
        data={orders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderOrder}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  orderContainer: { marginBottom: 20, padding: 10, backgroundColor: '#eee', borderRadius: 8 },
  orderDate: { fontWeight: 'bold', marginBottom: 10 },
  orderTotal: { marginTop: 10, fontWeight: 'bold', textAlign: 'right' },
  productContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  image: { width: 60, height: 50, resizeMode: 'cover', borderRadius: 6, marginRight: 10 },
  productInfo: { flexDirection: 'row', justifyContent: 'space-between', flex: 1 },
  productTitle: { fontWeight: '600', flexShrink: 1 },
  productQuantity: { fontWeight: '600' },
});

export default OrderHistoryScreen;
