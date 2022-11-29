import HomePage from "./pages/HomePage";
import { ThemeProvider } from "styled-components";
import { darkTheme, mainTheme } from "./styles/theme";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const localStorageCart = localStorage.getItem("@CURRENT_SALE");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentSale, setCurrentSale] = useState(
    localStorageCart ? JSON.parse(localStorageCart) : []
  );

  

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("@CURRENT_SALE", JSON.stringify(currentSale));
  }, [currentSale]);

  function addProductToCurrentSale(productData) {
    toast.success(`${productData.name} foi adicionado a sacola de compras`)
    if (currentSale.find((element) => element.id === productData.id)) {
      setCurrentSale(currentSale.map((product) => {
        if(product.id === productData.id){
          return {...product, count: product.count + 1}
        }

        return product
       
      }));
    }
    else{
      setCurrentSale([...currentSale, {...productData, count:1}])
      
    }
    // if (!currentSale.some((sale) => sale.id === productData.id)) {
    //   // const newSale = {...productData, count: 1}
    //   setCurrentSale([...currentSale, productData]);
    //   toast.success(`${productData.name} foi adicionado a sacola de compras`)

    // }
    // else{
    //   toast.error(`O item ${productData.name} já está em sua sacola`)
    // }
  }

  function removeProductFromCurrentSale(selected) {

    toast.warn(`${selected.name} removido da sacola de compras`);
    if(selected.count > 1){
      setCurrentSale(currentSale.map((product) => {
        if(product.id === selected.id){
          return {...product, count: product.count - 1}
        }

        return product
       
      }))

    }
    else{
      setCurrentSale( currentSale.filter((product) => product.id !== selected.id))
    }
    // const newList = currentSale.filter((product) => product.id !== selected.id);
    // setCurrentSale(newList);
    // toast.warn(`${selected.name} removido da sacola de compras`);
  }

  // function addCount(count, productId) {
  //   const newList = products.map((product) => {
  //     if (product.id === productId) {
  //       return { ...product, count: count + 1 };
  //     } else {
  //       return product;
  //     }
  //   });
  //   setCurrentSale(newList);
  // }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : mainTheme}>
      <div className="App">
        <HomePage
          products={products}
          setProducts={setProducts}
          addProductToCurrentSale={addProductToCurrentSale}
          removeProductFromCurrentSale={removeProductFromCurrentSale}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          search={search}
          setSearch={setSearch}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          filteredProducts={filteredProducts}
        />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
    </ThemeProvider>
  );
}

export default App;
