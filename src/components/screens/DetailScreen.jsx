import { useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet,ActivityIndicator } from 'react-native';
import Button from '../common/Button';
import { useState } from 'react';

const DetailScreen = ({ navigation }) => {
  const route = useRoute();
  const { id, title, description, image1 } = route.params;
   const [loading, setLoading] = useState(false);
 
   const handleLogin = () => {
   
     setLoading(true);
     // Simula llamada a backend
     setTimeout(() => {
       setLoading(false);
       navigation.navigate('HomeScreen'); // Cambia 'Home' por el nombre correcto de tu pantalla principal
     }, 2000);
   };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image1 }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        title={loading ? '' : 'Comprar'}
        onPress={handleLogin}
        disabled={loading}
      />
      
      {loading && <ActivityIndicator size="large" color="#36173d" style={{ marginTop: 15 }} />}

    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  id: {
    fontSize: 14,
    color: '#666'
  }
});
