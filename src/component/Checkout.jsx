import React, { useContext } from "react";
import Carousel from "../component/Carousel";
import Container from "../component/Container";
import { ProductContext } from "../context/ProductContext";

function Checkout() {
  const { cartItems, calcTotalAmount } = useContext(ProductContext);
  return (
    <div>
      <Carousel
        className="lg:h-[20vh] mb-12 lg:text-[10px]"
        flex="hidden"
        new_style="w-full lg:w-[50%] lg:right-[10%]"
        banner={`Home/ Checkout`}
        img="/img/bag5.jpg"
      />
      <Container className={"mt-5 mb-12"}>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-3">
          <div className="">
            <h4>Order Summary</h4>
            <div className="overflow-auto lg:overflow-hidden">
              <table className="w-full capitalize text-left">
                <thead>
                  <tr className="bg-gray-300">
                    <th className="px-3 py-3">s/n</th>
                    <th className="px-3 py-3">product Name</th>
                    <th className="px-3 py-3">Product image</th>
                    <th className="px-3 py-3">Quantity</th>
                    <th className="px-3 py-3">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.products?.length === 0 ? (
                    <>
                      <tr className="border-t hover:bg-gray-200">
                        <td className="px-3 py-2 text-left" colSpan={8}>
                          <h1 className="text-center">Cart is empty</h1>
                        </td>
                      </tr>
                    </>
                  ) : (
                    <>
                      {cartItems.products.map((items, index) => (
                        <tr key={index} className="border-t hover:bg-gray-200">
                          <td className="px-3 py-2 text-left">{items.id}</td>
                          <td className="px-3 py-2 text-left">
                            {items?.product?.name}
                          </td>
                          <td className="px-12 py-2 text-left">
                            <img
                              src={items?.product?.img || "/img/bag7.jpg"}
                              className="w-[50px]"
                              alt=""
                            />
                          </td>
                          <td className="px-3 py-2 text-left">
                            {items?.quantity}
                          </td>
                          <td className="px-3 py-2 text-left">
                            #{items?.amount?.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>

                <tbody>
                  <tr className="border-t border-gray-300">
                    <td
                      colSpan={"3"}
                      className="px-3 py-2 text-right font-semibold uppercase"
                    >
                      Total :{" "}
                    </td>
                    <td colSpan={"4"} className="px-3 py-2 text-left">
                      #{calcTotalAmount().toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="shadow-lg px-5 py-14">
            <h4>User Summary</h4>
            <div className="new-form">
              <form action="">
                <div className="mb-3">
                  <input
                    type="text"
                    className="outline none w-full border-1 border-gray-200 p-2 rounded"
                    name="full Name"
                    placeholder="Full Name"
                    id=""
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="outline none w-full border border-gray-200 p-2 rounded"
                    name="email"
                    placeholder="Email Address"
                    id=""
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="outline none w-full border border-gray-200 p-2 rounded"
                    name="email"
                    placeholder="Email Address"
                    id=""
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="outline none w-full border border-gray-200 p-2 rounded"
                    name="email"
                    placeholder="Delivery Address"
                    id=""
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-2">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="outline none w-full border border-gray-200 p-2 rounded"
                      name="phone"
                      placeholder="Phone Number"
                      id=""
                    />
                  </div>
                  <div className="mb-1">
                    <h5 className="outline none w-full border border-gray-200 p-1 rounded">
                      #{calcTotalAmount().toFixed(2)}
                    </h5>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="text-center bg-[#0B4F6C] w-full py-2 px-12 hover:bg-white hover:border hover:border-[#0B4F6C] transition-all duration-150 rounded text-white hover:text-[#0B4F6C] cursor-pointer"
                  >
                    Proceed to Pay
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <div className='bg-emerald-500'>kjhnfwe</div> */}
        </div>
      </Container>
    </div>
  );
}

export default Checkout;