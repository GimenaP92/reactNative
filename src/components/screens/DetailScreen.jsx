import { useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import Button from '../common/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
 import { useSelector } from 'react-redux';
import HeaderDown from '../Header/HeaderDown';

const FOOTER_HEIGHT = 70; 

const DetailScreen = ({ navigation }) => {
  const route = useRoute();
  const { id, title, description, image1 } = route.params;
  const [loading, setLoading] = useState(false);
  const localId = useSelector(state => state.user.localId);
  const dispatch = useDispatch();

  const handleBuy = () => {
  setLoading(true);

  dispatch(addToCart({ id, title, description, image1, quantity: 1 }));

  setTimeout(() => {
    setLoading(false);

    if (localId) {
    
      navigation.navigate('CartScreen');
    } else {

      navigation.navigate('LoginScreen');
    }
  }, 500);
};


  return (
    <View style={styles.container}>
      <Image source={{ uri: image1 }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        title={loading ? '' : 'Comprar'}
        onPress={handleBuy}
        disabled={loading}
      />
      {loading && <ActivityIndicator size="large" color="#36173d" style={{ marginTop: 15 }} />}
       <View style={styles.headerDownWrapper}>
     {localId && <HeaderDown />}
    </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
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
