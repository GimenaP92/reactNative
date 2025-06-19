import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Alert, Platform, ActivityIndicator } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from '../common/Input';
import Button from '../common/Button';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nationality, setNationality] = useState('');
  const [city, setCity] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => {
    return email.includes('@');
  };

  useEffect(() => {
    const allFieldsFilled =
      username.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '' &&
      confirmPassword.trim() !== '' &&
      nationality.trim() !== '' &&
      city.trim() !== '' &&
      birthdate.trim() !== '';

    const passwordsMatch = password === confirmPassword;
    const emailValid = isValidEmail(email);

    setIsFormValid(allFieldsFilled && passwordsMatch && emailValid);
  }, [username, email, password, confirmPassword, nationality, city, birthdate]);

  const handleRegister = () => {
    if (!isFormValid) {
      if (
        username.trim() === '' ||
        email.trim() === '' ||
        password.trim() === '' ||
        confirmPassword.trim() === '' ||
        nationality.trim() === '' ||
        city.trim() === '' ||
        birthdate.trim() === ''
      ) {
        Alert.alert('Por favor completa todos los campos.');
        return;
      }
      if (!isValidEmail(email)) {
        Alert.alert('Por favor ingresa un correo electrónico válido.');
        return;
      }
      if (password !== confirmPassword) {
        Alert.alert('Las contraseñas no coinciden.');
        return;
      }
    }

    setLoading(true);

    // Simula llamada a backend para registro
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Éxito', '¡Registro completado con éxito!');
      navigation.navigate('Home'); // Cambia 'Home' por el nombre correcto de tu pantalla principal
    }, 2000);
  };

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);

      const formattedDate = selectedDate.toISOString().split('T')[0];
      setBirthdate(formattedDate);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
     
  
  <Text style={styles.welcomeText}>¡Bienvenido/a a TravelToWorld!</Text>
  <Text style={styles.infoText}>
    Regístrate para comprar vuelos, alojamientos y paquetes exclusivos con las mejores ofertas.
  </Text>

  <Text style={styles.label}>Nombre de usuario</Text>
  <Input
    value={username}
    onChangeText={setUsername}
    placeholder="Nombre de usuario"
    editable={!loading}
  />

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

  <Text style={styles.label}>Nacionalidad</Text>
  <Input
    value={nationality}
    onChangeText={setNationality}
    placeholder="Nacionalidad"
    editable={!loading}
  />

  <Text style={styles.label}>Ciudad</Text>
  <Input
    value={city}
    onChangeText={setCity}
    placeholder="Ciudad"
    editable={!loading}
  />

  <Text style={styles.label}>Fecha de nacimiento</Text>
  <View>
    <TouchableOpacity
      onPress={() => !loading && setShowDatePicker(true)}
      style={styles.dateInput}
      disabled={loading}
    >
      <Text style={birthdate ? styles.dateText : styles.placeholderText}>
        {birthdate || 'Fecha de nacimiento (AAAA-MM-DD)'}
      </Text>
    </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
            maximumDate={new Date()}
            disabled={loading}
          />
        )}
      </View>

      <Button title={loading ? '' : 'Registrarse'} onPress={handleRegister} disabled={!isFormValid || loading} />
      {loading && <ActivityIndicator size="large" color="#36173d" style={{ marginTop: 15 }} />}

      <TouchableOpacity disabled={loading} onPress={() => navigation.navigate('Login')}>
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
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  placeholderText: {
    color: '#999',
  },
  dateText: {
    color: '#000',
  },
});

export default RegisterScreen;
