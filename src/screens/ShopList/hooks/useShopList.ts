import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {
  getAllProductsRequest,
  ProductType,
  removeProductRequest,
} from '../../../services';

export default function useShopList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const getAllProducts = () => {
    setRefreshing(true);
    getAllProductsRequest()
      .then(resp => {
        setProducts(resp.data.products);
      })
      .finally(() => {
        setRefreshing(false);
      });
  };

  const confirmCheck = (product: string) => {
    Alert.alert(
      'Atenção',
      'Deseja realmente excluir "' + product + '"?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            removeProduct(product);
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const removeProduct = (product: string) => {
    removeProductRequest(product).then(_ => {
      let auxArray = products;
      auxArray.splice(
        products.findIndex(item => item === product),
        1,
      );
      setProducts([...auxArray]);
      Alert.alert('Item removido com sucesso');
    });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return {
    products,
    confirmCheck,
    getAllProducts,
    refreshing,
  };
}
