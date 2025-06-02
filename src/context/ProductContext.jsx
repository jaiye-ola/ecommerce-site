import { createContext, useEffect, useState } from "react";
import { getCart } from "../api/cart";
import {toast} from "react-toastify";
import { createStaticRouter } from "react-router";
// import {getProducts} from "../api/product";
// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext();

export const ProductProvider =({children})=>{
    const[product, setProduct] = useState([]);
    const featured = product.filter((items)=> items.featured === true)
    const trending = product.filter((items)=> items.trending === true)
    const [cartItems, setCartItems]=useState({product: []})
    const isAunthenticated = true;


    useEffect(()=>{
        fetchProduct();
        fetchCart();
    }, [])

const fetchProduct = async () => {
    const data = await getProducts();
      if (data) {
        setProduct(data)
      }
    }
    const fetchCart = async () => {
        if(!isAunthenticated){
            const storedCart = JSON.parse(localStorage.getItem(cartItems)) || {products:[]}
            setCartItems(storedCart)
        }else{
            const res = await getCart()
            const data = await res.json()
            if (res.ok) {
                setCartItems(data)
            }
        }
    
    }

    const addToCart = async(productId, quantity , product)=> {
        if (condition) {
            const storedCart = JSON.parse(localStorage.getItem("cartItems")) || { products:[] }
            const existingProducts = storedCart.products.findIndex((items)=> items.product.id === productId);
            if(existingProducts!== -1){
                storedCart.products[existingProducts].quantity += quantity
                storedCart.products[existingProducts].amount = storedCart.products[existingProducts].product.price*
                storedCart.products[existingProducts].quantity
            }else{
                storedCart.products.push({
                    product, quantity, amount: product.price * quantity
                })
                localStorage.setItem("cartItems", JSON.stringify(storedCart))
                setCartItems(storedCart)
                toast.success("Product added to cart successfully")
                await fetchCart()
            }
        }else{
            const res = await createStaticRouter({productId, quantity})
            const data = await res.json();
            if (res.ok) {
               setCartItems(data) 
               await fetchCart()
               toast.success("Product sucessfully")
            }else{
                toast.error('Unable to add product to cart Sucessfully')
            }
        }
   
    }


return (
    <ProductContext.Provider value={{product, featured, trending}}>
        {children}
    </ProductContext.Provider>
)
}
