import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { useSignupMutation } from '../../../services/auth/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../features/user/userSlice';


const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [triggerSignup] = useSignupMutation();
  const dispatch = useDispatch();

  const isFormValid = email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '' &&
    password === confirmPassword && email.includes('@');

  const handleRegister = async () => {
  if (!isFormValid) {
    Alert.alert('Error', 'Por favor completa los campos correctamente.');
    return;
  }

  setLoading(true);

  try {
    const result = await triggerSignup({
      email,
      password,
      returnSecureToken: true,
    }).unwrap();

    // Asegúrate que localId exista en result, si no, ajusta según lo que te devuelva la API
    dispatch(setUser({
      userEmail: result.email,
      localId: result.localId,
      profileImage: null,  // Al registrarte no hay foto aún
    }));

    navigation.navigate('HomeScreen');
  } catch (error) {
    console.error('Error completo:', JSON.stringify(error, null, 2));
    const errorMessage = getFirebaseErrorMessage(error?.data?.error?.message);
    Alert.alert('Error de registro', errorMessage);
  } finally {
    setLoading(false);
  }
};

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.welcomeText}>¡Bienvenido/a a TravelToWorld!</Text>
      <Text style={styles.infoText}>
        Regístrate para comprar vuelos, alojamientos y paquetes exclusivos con las mejores ofertas.
      </Text>

      <Text style={styles.label}>Correo electrónico</Text>
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        editable={!loading}
      />

      <Text style={styles.label}>Contraseña</Text>
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        secureTextEntry
        editable={!loading}
      />

      <Text style={styles.label}>Confirmar contraseña</Text>
      <Input
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirmar contraseña"
        secureTextEntry
        editable={!loading}
      />

      <Button
        title={loading ? '' : 'Registrarse'}
        onPress={handleRegister}
        disabled={!isFormValid || loading}
      />
      {loading && <ActivityIndicator size="large" color="#36173d" style={{ marginTop: 15 }} />}

      <TouchableOpacity disabled={loading} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.registerText}>
          ¿Ya tienes una cuenta? <Text style={styles.linkText}>Inicia sesión aquí</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
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
  label: {
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 12,
    color: '#333',
    fontSize: 16,
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

export default RegisterScreen;
