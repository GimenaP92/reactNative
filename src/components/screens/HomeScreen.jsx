import React from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import CategoryButtons from '../Categories/CategoriesButtons';
import CustomCarousel from '../Home/CustomCarousel';
import OffersCarousel from '../Home/OffersCarousel';
import RefundPolicyCard from '../Home/RefundPolicyCard';
import ContactInfoCard from '../Home/ContactInfoCard';
import { useSelector } from 'react-redux';
import HeaderDown from '../Header/HeaderDown';

const FOOTER_HEIGHT = 70; 

const HomeScreen = ({ navigation }) => {
  const categoriesObject = useSelector(state => state.shop.categories);  
  const localId = useSelector(state => state.user.localId);
  const categories = Object.keys(categoriesObject);

  const handleCategorySelect = (category) => {
    navigation.navigate('CategoryScreen', { category });
  };

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
          {localId && <HeaderDown />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, position: 'relative' },
  scrollContent: { padding: 10, paddingBottom: FOOTER_HEIGHT + 20 /* espacio para footer */ },
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
