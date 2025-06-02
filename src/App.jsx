import React from 'react'
import Header from './component/Header'
import Carousel from './component/Carousel'
import ProductItems from './component/ProductItems'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import About from './component/About'
import Featured from './component/Featured'
import Trending from './component/Trending'
import { ProductProvider } from './context/ProductContext'
import Contact from './component/Contact'
import Footer from './component/Footer'
import ProductDetails from './component/ProductDetails'
import ThankYouPage from './component/ThankYouPage'
import Register from './component/Register'
import LoginPage from './component/LoginPage'


function App() {
  return (
    <ProductProvider>
      <Router>
         <Header/>
    <Routes>
      <Route
      path ="/"
      element = {
        <>
 <Carousel/>
      <About/>
      <Featured/>
      <Trending/>
      <Contact/>
      <Footer/>
      </>
      }
     />
     <Route 
     path = "/product"
     element ={
      <>
      < Carousel
      className = "lg:h-[20vh] mb-12"
      flex= "hidden"
      banner= "Home/Product"
      img="/img/w8.jpg"
/>
      </>
     }
     />
    <Route  path="/details/:id"element={<ProductDetails/>} />
  <Route path="/thank-you" element={<ThankYouPage />} />
  <Route path="/register" element={<Register />} />
   <Route path="/login" element={<LoginPage />} />
   </Routes>
     </Router>
 
    </ProductProvider>
  )
}

export default App
