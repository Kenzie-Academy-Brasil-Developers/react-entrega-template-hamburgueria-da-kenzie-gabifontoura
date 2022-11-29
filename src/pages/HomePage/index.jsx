import React, { useEffect } from "react";
import { api } from "../../api/api";

import Header from "../../components/Header";
import ProductsList from "../../components/ProductsList";
import { StyledHomePage, StyledHomePageFlexBox } from "./style";
import { useState } from "react";
import { StyledText } from "../../styles/typography";
import Cart from "../../components/Cart";
import { Container } from "../../styles/Container";

const HomePage = ({
  products,
  setProducts,
  addProductToCurrentSale,
  removeProductFromCurrentSale,
  currentSale,
  setCurrentSale,
  setSearch,
  search,
  filteredProducts,
  setDarkMode,
  darkMode,
 

}) => {
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
        <StyledText tag="h1" textAlign="center">
          Carregando ...
        </StyledText>
      ) : (
        <>
          
          <Header  setSearch={setSearch} search={search} setDarkMode={setDarkMode} darkMode={darkMode}/>
          <Container>
            <StyledHomePageFlexBox>
                <ProductsList
                  addProductToCurrentSale={addProductToCurrentSale}
                  products={products}
                  filteredProducts={filteredProducts}
                  
                />
                <Cart
                  currentSale={currentSale}
                  setCurrentSale={setCurrentSale}
                  addProductToCurrentSale={addProductToCurrentSale}
                  removeProductFromCurrentSale={removeProductFromCurrentSale}
                  
                />
              </StyledHomePageFlexBox>

          </Container>
       
        </>
      )}
    </StyledHomePage>
  );
};

export default HomePage;
