import React from 'react';
import {View} from 'react-native';
import ShopListComponent from '../../components/ShopList';

// Hooks
import useShopList from './hooks/useShopList';

export default function ShopList() {
  const {products, confirmCheck, getAllProducts, refreshing} =
    useShopList();

  return (
    <View>
      <ShopListComponent
        refreshing={refreshing}
        products={products}
        refresh={getAllProducts}
        onRemove={confirmCheck}
      />
    </View>
  );
}
