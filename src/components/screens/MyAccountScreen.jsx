import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { userProfile } from '../helpers/mockCuenta';

const MyAccountScreen = () => {
  const { firstName, lastName, nationality, email, phone, birthdate, avatar } = userProfile;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatarWrapper}>
         <Image source={{ uri: userProfile.avatar }} style={styles.avatar} />
      </View>

      <Text style={styles.name}>{firstName} {lastName}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nacionalidad</Text>
        <Text style={styles.info}>{nationality}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.info}>{email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Teléfono</Text>
        <Text style={styles.info}>{phone}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Fecha de nacimiento</Text>
        <Text style={styles.info}>{birthdate}</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f9',
    paddingHorizontal: 30,
    paddingTop: 50,
    alignItems: 'center',
    paddingBottom: 50,
  },
  avatarWrapper: {
    shadowColor: '#ff4845',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
    marginBottom: 25,
  },
   avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#36173d',
    marginBottom: 35,
    letterSpacing: 1,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    fontSize: 12,
    color: '#999',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  info: {
    fontSize: 18,
    color: '#36173d',
    fontWeight: '500',
  },
  button: {
    marginTop: 45,
    backgroundColor: '#ff4845',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 35,
    shadowColor: '#ff4845',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 1.2,
  },
});

export default MyAccountScreen;
