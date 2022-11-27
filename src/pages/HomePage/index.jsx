import React, { useEffect } from "react";
import { api } from "../../api/api";

import Header from "../../components/Header";
import ProductsList from "../../components/ProductsList";
import { StyledHomePage, StyledHomePageFlexBox } from "./style";
import { useState } from "react";
import { StyledText } from "../../styles/typography";
import Cart from "../../components/Cart";

const HomePage = ({ products, setProducts, addProductToCurrentSale , removeProductFromCurrentSale, currentSale}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <StyledHomePage>
      {loading ? (
        <StyledText tag="h1" textAlign="center" >Carregando ...</StyledText>
      ) : (
        <>
          <Header />
          <div className="container">
            <StyledHomePageFlexBox>

                <ProductsList addProductToCurrentSale={addProductToCurrentSale}  products={products} />
                <Cart currentSale={currentSale} addProductToCurrentSale={addProductToCurrentSale} removeProductFromCurrentSale={removeProductFromCurrentSale}/>
            </StyledHomePageFlexBox>
            
          </div>
        </>
      )}
    </StyledHomePage>
  );
};

export default HomePage;
