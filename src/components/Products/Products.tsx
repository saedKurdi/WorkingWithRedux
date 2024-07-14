import { FC } from "react";
import { ProductsList } from "./styles";
import { ProductItem } from "../ProductItem/ProductItem";
import { useSelector } from "react-redux";
import { getProducts } from "../../redux/selectors";

export const Products: FC = () => {
  const products = useSelector(getProducts);
  return (
    <ProductsList>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </ProductsList>
  );
};
