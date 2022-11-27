import "./styles/index.css";

import HomePage from "./pages/HomePage";
import { ThemeProvider } from "styled-components";
import { darkTheme, mainTheme } from "./styles/theme";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);

  function addProductToCurrentSale(productData) {
    if (!currentSale.some((sale) => sale.id === productData.id)) {
      setCurrentSale([...currentSale, productData]);
    }
  }

  function removeProductFromCurrentSale(productId) {
    const newList = currentSale.filter((product) => product.id !== productId);
    setCurrentSale(newList);
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : mainTheme}>
      <div className="App">
        <button onClick={() => setDarkMode(!darkMode)}>Alterar tema</button>
        <HomePage
          products={products}
          setProducts={setProducts}
          addProductToCurrentSale={addProductToCurrentSale}
          removeProductFromCurrentSale={removeProductFromCurrentSale}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
