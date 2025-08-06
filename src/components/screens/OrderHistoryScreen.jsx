import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderDown from '../Header/HeaderDown';
import { useGetOrdersByUserIdQuery } from '../../services/shop/shopApi';
import { useFocusEffect } from '@react-navigation/native';

const FOOTER_HEIGHT = 70;

const OrderHistoryScreen = () => {
  const userId = useSelector(state => state.user.localId);
  const dispatch = useDispatch();

  const {
    data: userOrders = [],
    isLoading,
    isError,
    refetch
  } = useGetOrdersByUserIdQuery(userId, { skip: !userId });

  useFocusEffect(
    React.useCallback(() => {
      if (userId) {
        refetch();
      }
    }, [userId, refetch])
  );

  if (isLoading) return <Text>Cargando órdenes...</Text>;
  if (isError) return <Text>Error al cargar las órdenes.</Text>;

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
      <Text style={styles.header}>Órdenes de compra</Text>
      {userOrders.length === 0 ? (
        <Text style={styles.emptyText}>Aún no tienes órdenes de compra.</Text>
      ) : (
        <FlatList
          data={userOrders}
          keyExtractor={item => item.id}
          renderItem={renderOrder}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}
      <View style={styles.headerDownWrapper}>
        <HeaderDown />
      </View>
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
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
    color: '#888',
  },
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

export default OrderHistoryScreen;
