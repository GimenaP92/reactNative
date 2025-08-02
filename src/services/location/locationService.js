import * as Location from 'expo-location';

export const getAddressFromCurrentLocation = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permiso de ubicación denegado');
      return null;
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

  const response = await fetch(
  `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
  {
    headers: {
      'User-Agent': 'machupicchu-app/1.0 (gimenavaleriapascuale@gmail.com)',
      'Accept-Language': 'es',
    },
  }
);

    const data = await response.json();

    return data.display_name;
  } catch (error) {
    console.error('Error obteniendo la ubicación:', error);
    return null;
  }
};
