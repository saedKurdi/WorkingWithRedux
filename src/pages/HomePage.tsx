import { lazy } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

const ProductsPage = lazy(() => import("./ProductsPage"));
const AboutPage = lazy(() => import("./About"));
const Cart = lazy(() => import("./Cart"));
export default function HomePage() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <NavLink to={"/products"}>PRODUCTS</NavLink>
        <NavLink to={"/about"}>ABOUT</NavLink>
        <NavLink to={"/cart"}>CART</NavLink>
      </div>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
