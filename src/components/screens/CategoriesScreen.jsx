import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CategoryCards from '../Categories/CategoriesCards';
import HeaderDown from '../Header/HeaderDown';
import { useSelector } from 'react-redux';

const FOOTER_HEIGHT = 70; 

const CategoryScreen = ({ route }) => {
  const { category } = route.params;
    const localId = useSelector(state => state.user.localId);

  return (
    <View style={styles.container}>
      <CategoryCards selectedCategory={category} />
       <View style={styles.headerDownWrapper}>
      {localId && <HeaderDown />}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
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

export default CategoryScreen;
