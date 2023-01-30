/* eslint-disable prettier/prettier */
import instance from '../_config/instance';

export type ProductType = string;

export type GetAllProductsResponseType = {
  products: ProductType[];
};

export type AddProductResponseType = {
  messsage: string;
};

const removeProductRequest = async (product: string) => {
  instance.delete<AddProductResponseType>('products', {
    data: {
      product,
    },
  });
};

const addProductRequest = async (product: string) => {
  instance.put<AddProductResponseType>('products', {
    product,
  });
};

const getAllProductsRequest = async () => {
  return instance.get<GetAllProductsResponseType>('products');
};

export {
  removeProductRequest,
  addProductRequest,
  getAllProductsRequest,
};
