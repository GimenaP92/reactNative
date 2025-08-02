// ContactInfoCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactInfoCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Contacto con TravelToWorld</Text>
      <Text style={styles.text}>
        Si tenés alguna duda, consulta o querés brindarnos tu opinión, podés escribirnos a:
      </Text>
      <Text style={styles.contact}>📧 contacto@traveltoworld.com</Text>
      <Text style={styles.text}>
        También podés llamarnos al teléfono: 
      </Text>
      <Text style={styles.contact}>📞 +54 9 11 1234 5678</Text>
      <Text style={styles.note}>
        Nuestro equipo está disponible de lunes a viernes de 9 a 18 hs para ayudarte.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#36173d',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 12,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'justify',
  },
  contact: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  note: {
    fontSize: 13,
    color: '#ddd',
    fontStyle: 'italic',
    textAlign: 'justify',
  },
});


export default ContactInfoCard;
