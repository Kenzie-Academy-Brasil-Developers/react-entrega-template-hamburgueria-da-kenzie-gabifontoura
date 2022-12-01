import React from "react";
import ProductCard from "./ProductCard";
import { StyledProductsList } from "./style";

const ProductsList = ({
  
  addProductToCurrentSale,
  filteredProducts,
}) => {
  return (
    <StyledProductsList>
      {filteredProducts.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          addProductToCurrentSale={addProductToCurrentSale}
        />
      ))}
    </StyledProductsList>
  );
};

export default ProductsList;
