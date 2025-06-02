import Carousel from "./Carousel";
import { useContext } from "react";
import Container from "./Container";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router";

function Cart() {
  const { cartItems } = useContext(ProductContext);

  return (
    <div>
      <Carousel
        className="lg:h-[] mb-12 lg:text[10px]"
        flex="hidden"
        new_style="w-full lg:w-[50%] lg:right-[10%]"
        banner={`Home/Checkout`}
        img="/img/bag4.jpg"
      ></Carousel>
      <Container className={"mt-5 mb-12"}>
        <table>
          <tr className="bg-gray-300">
            <th className="px-3 py-3">product Name</th>
            <th className="px-3 py-3">Product Image</th>
            <th className="px-3 py-3">price</th>
            <th className="px-3 py-3">Quantity</th>
            <th className="px-3 py-3">Update</th>
            <th className="px-3 py-3">Amount</th>
            <th className="px-3 py-3">Remove</th>
          </tr>
          <tbody>
     {cartItems?.products.length === 0 ? (<>
       <tr className="border-t hover:bg-gray-200">
              <td className="px-3 py-2 text-left">
                <h1></h1>
              </td>
              </tr>
     </>) : (
      <>
      {cartItems.products.map(() => (
        
<>
 <tr className="border-t hover:bg-gray-200">
              <td className="px-3 py-2 text-left">1</td>
              <td className="px-3 py-2 text-left">Product 1</td>
              <td className="px-12 py-2 text-left">
                <img src="/img/bag6.jpg" className="w-[50px] " alt="" />
              </td>
              <td className="px-3 py-2 text-left">3</td>
              <td className="px-3 py-2 text-left">
                <input
                  type=""
                  min={1}
                  value={1}
                  className="border-gray-500 border-rounded"
                />
              </td>
              <td>#600</td>
              <td>
                <button type="submit" className="">
                  <FaRegTrashAlt size={20} />
                </button>
              </td>
            </tr>
</>

      ) )}  
</>
     )}




           
            


          </tbody>
          <tbody>
            <tr className="border-t border-gray-300">
              <td
                colSpan={"6"}
                className="px-3 py-2 text-right font-semibold uppercase"
              >
                Subtotal:
              </td>
              <td colSpan={"5"} className="px-3 py-2 text-left">
                #3,000.0
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td
                colSpan={"6"}
                className="px-3 py-2 text-right font-semibold uppercase"
              >
                vat (0.075):
              </td>
              <td colSpan={"5"} className="px-3 py-2 text-left">
                #250.00
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td
                colSpan={"6"}
                className="px-3 py-2 text-right font-semibold uppercase"
              >
                Total:
              </td>
              <td colSpan={"5"} className="px-3 py-2 text-left">
                #3,250.0
              </td>
            </tr>
            <tr className="border-t border-gray-300"></tr>
            <td
              colSpan={"7"}
              className="px-3 py-5 text-right font-semibold uppercase"
            ></td>
            <Link
              to=""
              className="bg-[#0B4F6C] capitalize font-semibold hover:bg-white duration-500 transition-all hover:text-[#0B4F6C]
            hover:border hover:border-[#0B4F6C] text-white p-3 w-full "
            ></Link>
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default Cart;
