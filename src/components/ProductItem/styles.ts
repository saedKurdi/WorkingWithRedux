import styled from "styled-components";

const ProductContainer = styled.li`
  width: 380px;
  height: 125px;
  background-color: antiquewhite;
  border-radius: 15px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const ProductID = styled.p`
  font-weight: bolder;
  font-size: 22px;
`;

const ProductName = styled.p`
  font-size: 20px;
`;

const ProductQuantity = styled.p`
  font-size: 17px;
`;

const ProductPrice = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: springgreen;
`;

export {
  ProductContainer,
  ProductID,
  ProductName,
  ProductQuantity,
  ProductPrice,
};
