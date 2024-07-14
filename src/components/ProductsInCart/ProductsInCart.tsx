import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/selectors";
import { ProductInCartList, ProductsInCartList } from "./styles";

export default function ProductsInCart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  return (
    <ProductsInCartList>
      {cart.map((p) => (
        <ProductInCartList>
          <p>ID {p.id}</p>
          <p>Name : {p.name}</p>
          <p>Price : {p.price}$</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => {}}
              style={{ padding: "0 10px", cursor: "pointer" }}
            >
              +
            </button>
            <p>{p.quantity}</p>
          </div>
        </ProductInCartList>
      ))}
    </ProductsInCartList>
  );
}
