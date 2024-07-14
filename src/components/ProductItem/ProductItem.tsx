import { FC } from "react";
import { Product } from "../../types/Product";
import {
  ProductContainer,
  ProductID,
  ProductName,
  ProductQuantity,
  ProductPrice,
} from "./styles";
import { useDispatch } from "react-redux";
import { decreaseProductCountById } from "../../redux/actions";

interface IProductItem {
  product: Product;
}

export const ProductItem: FC<IProductItem> = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <ProductContainer>
      <ProductID>ID : {product?.id}</ProductID>
      <ProductName>Name : {product?.name}</ProductName>
      <ProductQuantity>Quantity : {product?.quantity}</ProductQuantity>
      <ProductPrice>Price : {product?.price}$</ProductPrice>
      <button
        onClick={() => {
          dispatch(decreaseProductCountById(product?.id));
        }}
      >
        Add To Cart
      </button>
    </ProductContainer>
  );
};
