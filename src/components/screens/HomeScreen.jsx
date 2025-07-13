import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CategoryButtons from '../Categories/CategoriesButtons';
import CustomCarousel from '../Home/CustomCarousel';
import OffersCarousel from '../Home/OffersCarousel';
import RefundPolicyCard from '../Home/RefundPolicyCard';
import ContactInfoCard from '../Home/ContactInfoCard';
import { useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
 
  const categoriesObject = useSelector(state => state.shop.categories);
  const categories = Object.keys(categoriesObject);
  const handleCategorySelect = (category) => {
    navigation.navigate('CategoryScreen', { category });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tu aventura empieza aquí</Text>
       <CategoryButtons categories={categories} onSelectCategory={handleCategorySelect} />
      <View style={{ marginBottom: 20 }}>
        <CustomCarousel />
      </View>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <OffersCarousel />
      </View>
      <ContactInfoCard />
      <RefundPolicyCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
    paddingVertical: 5,
    textAlign: 'center',
    color: '#555555',
    backgroundColor: '#ffec5e',
    borderRadius: 5,
    marginBottom: 15,
  },
});

export default HomeScreen;
