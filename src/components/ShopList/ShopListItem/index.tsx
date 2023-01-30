import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity, Text} from 'react-native';

export default function ShopListItem(props: {
  product: string;
  onRemove(product: string): void;
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onLongPress={() => props.onRemove(props.product)}>
      <Text style={styles.text}>• {props.product}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#00000020',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 16,
  },
});
