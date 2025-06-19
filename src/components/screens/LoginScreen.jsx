import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Input from '../common/Input';
import Button from '../common/Button';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      alert('Por favor ingresa usuario y contraseña');
      return;
    }
    setLoading(true);
    // Simula llamada a backend
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home'); // Cambia 'Home' por el nombre correcto de tu pantalla principal
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido/a a TravelToWorld!</Text>
      <Text style={styles.infoText}>
        Inicia sesión para comprar vuelos, alojamientos y paquetes exclusivos con las mejores ofertas.
      </Text>

      <Input
        value={username}
        onChangeText={setUsername}
        placeholder="Usuario"
        autoCapitalize="none"
        editable={!loading}
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        secureTextEntry
        editable={!loading}
      />

      <Button
        title={loading ? '' : 'Iniciar sesión'}
        onPress={handleLogin}
        disabled={loading}
      />
      
      {loading && <ActivityIndicator size="large" color="#36173d" style={{ marginTop: 15 }} />}

      <TouchableOpacity disabled={loading} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>
          ¿Aún no tienes cuenta?{' '}
          <Text style={styles.linkText}>Regístrate aquí</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#ff4845',
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
    color: '#555',
  },
  registerText: {
    marginTop: 16,
    textAlign: 'center',
    color: '#555',
  },
  linkText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
