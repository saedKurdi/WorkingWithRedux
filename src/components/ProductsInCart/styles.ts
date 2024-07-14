import styled from "styled-components";

const ProductsInCartList = styled.ul`
  margin-top: 75px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const ProductInCartList = styled.li`
  width: 380px;
  height: 125px;
  background-color: antiquewhite;
  border-radius: 15px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

export { ProductsInCartList, ProductInCartList };
