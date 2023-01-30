import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import {ProductType} from '../../services';
import ShopListItem from './ShopListItem';

interface ShopListComponentProps {
  products: ProductType[];
  onRemove(product: string): void;
  refresh(): void;
  refreshing: boolean;
}

export default function ShopListComponent({
  products,
  onRemove,
  refresh,
  refreshing,
}: ShopListComponentProps) {
  return (
    <FlatList
      refreshing={refreshing}
      onRefresh={refresh}
      style={styles.container}
      data={products}
      renderItem={({item}) => (
        <ShopListItem onRemove={onRemove} product={item} />
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
