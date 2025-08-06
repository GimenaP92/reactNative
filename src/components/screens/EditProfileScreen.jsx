import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useGetUserDataQuery, usePutUserDataMutation } from '../../services/user/userApi';
import HeaderDown from '../Header/HeaderDown';
import { updateSession } from '../../db';

const FOOTER_HEIGHT = 70; 

const EditProfileScreen = () => {
  const localId = useSelector(state => state.user.localId);
  const navigation = useNavigation();

  // Obtener datos actuales
  const { data: userData, isLoading, error } = useGetUserDataQuery(localId, {
    skip: !localId,
  });

  // Estados locales para inputs, ahora incluyendo name y lastName
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  // Mutation para actualizar datos
  const [putUserData, { isLoading: isSaving }] = usePutUserDataMutation();

  // Cuando carga userData, setear estado local
  useEffect(() => {
    if (userData) {
      setName(userData.name || '');
      setLastName(userData.lastName || '');
      setPhone(userData.phone || '');
      setAddress(userData.address || '');
    }
  }, [userData]);

 const handleSave = async () => {
  try {
    await putUserData({ localId, data: { name, lastName, phone, address } }).unwrap();

    // Actualizar sesión local SQLite
    await updateSession({ userEmail: null, localId, profileImage: null, phone, address, name, lastName });

    Alert.alert('¡Éxito!', 'Datos guardados correctamente.');
    navigation.goBack();
  } catch (e) {
    Alert.alert('Error', 'No se pudieron guardar los datos.');
    console.error('Error updating user data:', e);
  }
};


  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#36173d" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Error al cargar los datos.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese nombre"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Apellido</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese apellido"
        value={lastName}
        onChangeText={setLastName}
      />

      <Text style={styles.label}>Teléfono</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese teléfono"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.label}>Dirección</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese dirección"
        value={address}
        onChangeText={setAddress}
      />

      <TouchableOpacity
        style={[styles.button, isSaving && { opacity: 0.6 }]}
        onPress={handleSave}
        disabled={isSaving}
      >
        {isSaving ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Guardar Cambios</Text>
        )}
      </TouchableOpacity>
      <View style={styles.headerDownWrapper}>
        <HeaderDown />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#f8f4f9',
    flexGrow: 1,
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 8,
    color: '#36173d',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 25,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#ff4845',
    paddingVertical: 15,
    borderRadius: 35,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 1.2,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default EditProfileScreen;
