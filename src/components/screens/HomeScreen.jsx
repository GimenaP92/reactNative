import React from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import CategoryButtons from '../Categories/CategoriesButtons';
import CustomCarousel from '../Home/CustomCarousel';
import OffersCarousel from '../Home/OffersCarousel';
import RefundPolicyCard from '../Home/RefundPolicyCard';
import ContactInfoCard from '../Home/ContactInfoCard';
import HeaderDown from '../Header/HeaderDown';
import HeaderLogin from '../Header/HeaderLogin';
import { useSelector } from 'react-redux';
import { useGetProductsQuery } from '../../services/shop/shopApi';

const FOOTER_HEIGHT = 70;

const HomeScreen = ({ navigation }) => {
  const localId = useSelector(state => state.user.localId);

  const { data: categoriesObject, isLoading, error } = useGetProductsQuery();
  const categories = categoriesObject ? Object.keys(categoriesObject) : [];

  const handleCategorySelect = (category) => {
    navigation.navigate('CategoryScreen', { category });
  };

  if (isLoading) return <ActivityIndicator size="large" color="#5a2b68" />;
  if (error) return <Text>Error al cargar las categorías</Text>;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} style={{ flex: 1 }}>
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
        {localId ? (
  <HeaderDown />
) : (
<HeaderLogin/>
)}

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, position: 'relative' },
  scrollContent: { padding: 10, paddingBottom: FOOTER_HEIGHT + 20 },
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
