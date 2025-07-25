import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { useLoginMutation } from '../../../services/auth/authApi';
import { setUser } from '../../../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { useLazyGetProfilePictureQuery, userApi } from '../../../services/user/userApi';


const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [triggerLogin] = useLoginMutation();
  const [triggerGetProfilePicture] = useLazyGetProfilePictureQuery();
  const dispatch = useDispatch();
  const { redirectTo } = route.params || {};

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Por favor ingresa email y contraseña');
      return;
    }

    setLoading(true);

    try {
      // 1. Login
      const result = await triggerLogin({
        email,
        password,
        returnSecureToken: true,
      }).unwrap();

      // 2. Traer imagen con lazy query
      const profileResponse = await triggerGetProfilePicture(result.localId).unwrap();

      const profileImage = profileResponse?.profileImage || null;

      // 3. Guardar en redux todo junto
      dispatch(setUser({
        userEmail: result.email,
        localId: result.localId,
        profileImage,
      }));

      if (redirectTo) {
        navigation.navigate(redirectTo);
      } else {
        navigation.navigate('HomeScreen');
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Email o contraseña incorrectos.");
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

      <Button
        title={loading ? '' : 'Iniciar sesión'}
        onPress={handleLogin}
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