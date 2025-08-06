import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, Switch } from 'react-native';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { useLoginMutation } from '../../../services/auth/authApi';
import { setUser } from '../../../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { clearSession, saveSession } from '../../../db';

const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [persistSession, setPersistSession] = useState(false);
  const [triggerLogin] = useLoginMutation();
  const dispatch = useDispatch();
  const { redirectTo } = route.params || {};

  const onSubmit = async () => {
    if (!email || !password) {
      alert('Por favor ingresa email y contraseña');
      return;
    }

    setLoading(true);
    try {
      const result = await triggerLogin({ email, password }).unwrap();
      const { email: userEmail, localId, profileImage, phone, address } = result;

      if (persistSession) {
        await saveSession({ userEmail, localId, profileImage, phone, address });
      } else {
        await clearSession();
      }

      dispatch(setUser({ userEmail, localId, profileImage, phone, address }));
      navigation.navigate(redirectTo || 'HomeScreen');

    } catch (error) {
      alert('Email o contraseña incorrectos.');
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido/a a TravelToWorld!</Text>
      <Text style={styles.infoText}>
        Inicia sesión para comprar vuelos, alojamientos y paquetes exclusivos con las mejores ofertas.
      </Text>

      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
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

      <View style={{ marginTop: 10, alignItems: 'center' }}>
        <Text>¿Mantener sesión iniciada?</Text>
        <Switch
          onValueChange={() => setPersistSession(!persistSession)}
          value={persistSession}
           thumbColor={persistSession ? '#7b3f7b' : '#cda0d4'}
             trackColor={{ false: '#ccc', true: '#cda0d4' }}
        />
      </View>

      <Button
        title={loading ? '' : 'Iniciar sesión'}
        onPress={onSubmit}
        disabled={loading}
      />

      {loading && <ActivityIndicator size="large" color="#36173d" style={{ marginTop: 15 }} />}

      <TouchableOpacity disabled={loading} onPress={() => navigation.navigate('RegisterScreen')}>
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
