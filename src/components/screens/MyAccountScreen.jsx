import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setProfileImage } from '../../features/user/userSlice';
import { useNavigation } from '@react-navigation/native';
import CameraIcon from '../common/CameraIcon';
import * as ImagePicker from 'expo-image-picker';
import { uploadImageToCloudinary } from '../../cloudinary/uploadImage';
import { usePutProfilePictureMutation, useGetProfilePictureQuery, useGetUserDataQuery } from '../../services/user/userApi';

const MyAccountScreen = () => {
  const userEmail = useSelector((state) => state.user.userEmail) || '';
  const localId = useSelector((state) => state.user.localId) || null;
  const profileImage = useSelector((state) => state.user.profileImage) || null;

  const { data: profileData } = useGetProfilePictureQuery(localId, { skip: !localId });
  const { data: userData, isLoading: userDataLoading } = useGetUserDataQuery(localId, { skip: !localId });

  const [putProfilePicture] = usePutProfilePictureMutation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Actualizar la imagen de perfil en el store cuando cambie profileData
  useEffect(() => {
    if (profileData?.profileImage) {
      dispatch(setProfileImage(profileData.profileImage));
    }
  }, [profileData, dispatch]);

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(clearUser());
      setLoading(false);
      navigation.navigate('LoginScreen');
    }, 1000);
  };

  // Función para abrir cámara y tomar foto
  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled) {
      const localUri = result.assets[0].uri;
      setLoading(true);
      try {
        const downloadUrl = await uploadImageToCloudinary(localUri);
        console.log('Cloudinary URL:', downloadUrl);

        const response = await putProfilePicture({ localId, profileImage: downloadUrl }).unwrap();
        console.log("Respuesta putProfilePicture:", response);

        dispatch(setProfileImage(downloadUrl));
      } catch (error) {
        alert('Error al subir la imagen.');
        console.error('Error en putProfilePicture:', error);
        if (error.data) console.error('Error data:', error.data);
        if (error.status) console.error('Error status:', error.status);
      }
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatarWrapper}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.avatar} />
        ) : (
          <View
            style={[
              styles.avatar,
              { backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center' },
            ]}
          >
            <Text style={{ color: '#666' }}>No hay foto</Text>
          </View>
        )}

        <TouchableOpacity
          onPress={pickImage}
          style={styles.cameraIconWrapper}
          activeOpacity={0.7}
          accessibilityLabel="Tomar foto de perfil"
        >
          <CameraIcon />
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>{userEmail || 'Usuario'}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>ID de usuario</Text>
        <Text style={styles.info}>{localId || ''}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Teléfono</Text>
        <Text style={styles.info}>{userData?.phone }</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Dirección</Text>
        <Text style={styles.info}>{userData?.address }</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EditProfileScreen')}
      >
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#36173d', marginTop: 20 }]}
        onPress={handleLogout}
        disabled={loading}
      >
        <Text style={styles.buttonText}>{loading ? '' : 'Cerrar sesión'}</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#36173d" style={{ marginTop: 15 }} />}
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
    position: 'relative',
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
  cameraIconWrapper: {
    position: 'absolute',
    bottom: 5,
    right: -5,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 6,
  },
  name: {
    fontSize: 15,
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
