import React from "react";
import ProductCard from "./ProductCard";
import { StyledProductsList } from "./style";

const ProductsList = ({ products , addProductToCurrentSale, filteredProducts}) => {
  return (
    <StyledProductsList>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} addProductToCurrentSale={addProductToCurrentSale}/>
      ))}
    </StyledProductsList>
  );
};

export default ProductsList;
