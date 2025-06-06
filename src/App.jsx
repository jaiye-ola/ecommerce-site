import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ToastContainer } from 'react-toastify';
import Header from "./component/Header"
import Carousel from "./component/Carousel";
import About from "./component/About";
import { ProductProvider } from "./context/ProductContext";
import Featured from "./component/Featured";
import Trending from "./component/Trending";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Product from "./component/Product";
import ProductDetails from "./component/ProductDetails";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Header />
         <ToastContainer position="top-right" autoClose={5000} /> 
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <About />
                <Featured />
                <Trending />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/product"
            element={
              <>
                <Carousel
                  className="lg:h-[20vh] mb-12"
                  flex="hidden"
                  banner="Home/Product"
                  img="/img/w8.jpg"
                />
                <Product />
              </>
            }
          />
          <Route
            path="/details/:id"
            element={<ProductDetails /> }
          />
          <Route
            path="/cart"
            element={<Cart /> }
          />
          <Route
            path="/checkout"
            element={<Checkout /> }
          />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
