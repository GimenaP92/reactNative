// RefundPolicyCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RefundPolicyCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>¿Te arrepentiste de tu compra?</Text>
      <Text style={styles.text}>
        De acuerdo al derecho de arrepentimiento, podés cancelar tu compra dentro de los 10 días corridos de haberla realizado.
      </Text>
      <Text style={styles.note}>
        * Según Resolución 329/2020 ANAC el derecho de arrepentimiento no aplica para vuelos y estos se rigen por la política de devolución informada en tu voucher.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffec5e',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    color: '#444',
    marginBottom: 10,
    textAlign: 'justify',
  },
  note: {
    fontSize: 13,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'justify',
  },
});

export default RefundPolicyCard;
