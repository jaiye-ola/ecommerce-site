import React from "react";

function Checkout() {
  return (
    <div>
      <Carousel
        className="lg:h-[] mb-12 lg:text[10px]"
        flex="hidden"
        new_style="w-full lg:w-[50%] lg:right-[10%]"
        banner={`Home/Checkout`}
        img="/img/bag4.jpg"
      >
        <Container className={"mt-5 mb-12"}>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-3">
            <div className="">
              <h4>Order Summary</h4>
              <div className="overflow-auto lg:overflow-hidden">
                <table className="w-full capitalize text-left">
                  <thead>
                    <tr className="bg-gray-300">
                      <th className="px-3 py-3">S/N</th>
                      <th className="px-3 py-3">product Name</th>
                      <th className="px-3 py-3">Product Image</th>
                      <th className="px-3 py-3">Quantity</th>
                      <th className="px-3 py-3">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t hover:bg-gray-200">
                      <td className="px-3 py-2 text-left">1</td>
                      <td className="px-3 py-2 text-left">Product 1</td>
                      <td className="px-12 py-2 text-left">
                        <img src="/img/bag6.jpg" className="w-[50px] " alt="" /> </td>

                      <td className="px-3 py-2 text-left">3</td>
                      <td className="px-3 py-2 text-left">#600  </td>
                    </tr>
                       <tr className="border-t hover:bg-gray-200">
                      <td className="px-3 py-2 text-left">1</td>
                      <td className="px-3 py-2 text-left">Product 1</td>
                      <td className="px-12 py-2 text-left">
                        <img src="/img/bag6.jpg" className="w-[50px] " alt="" /> </td>
                        
                      <td className="px-3 py-2 text-left">3</td>
                      <td className="px-3 py-2 text-left">#600  </td>
                    </tr>
                       <tr className="border-t hover:bg-gray-200">
                      <td className="px-3 py-2 text-left">1</td>
                      <td className="px-3 py-2 text-left">Product 1</td>
                      <td className="px-12 py-2 text-left">
                        <img src="/img/bag6.jpg" className="w-[50px] " alt="" /> </td>
                        
                      <td className="px-3 py-2 text-left">3</td>
                      <td className="px-3 py-2 text-left">#600 </td>
                    </tr>
                  </tbody>
                  <tbody>
                    
            <tr>
               <td colSpan={"3"}  className="px-3 py-2 text-right font-semibold uppercase">Total:</td>
               <td colSpan={"4"} className="px-3 py-2 text-left">#3,250.0</td>
            </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
<div className="shadow-lg px-5 py-14">
    <h4>User Summary</h4>
    <div className="new form">
        <form action="">
<div className="mb-3">
<input type="text" className="outline none w-full border-1 border-gray-200 p-2 rounded" name="full Name" placeholder="full name" id=""></input>
</div>
<div className="mb-3">
<input type="text" className="outline none w-full border-1 border-gray-200 p-2 rounded" name="email" placeholder="full name" id=""></input>
</div>
<div className="mb-3">
<input type="text" className="outline none w-full border-1 border-gray-200 p-2 rounded" name="email" placeholder="full name" id=""></input>
</div>
<div className="mb-3">
<input type="text" className="outline none w-full border-1 border-gray-200 p-2 rounded" name="email" placeholder="full name" id=""></input>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-2">
<div className="mb-3">
<input type="text" className="outline none w-full border-1 border-gray-200 p-2 rounded" name="phone" placeholder="full name" id=""></input>
</div>
<div className="mb-1">
    <h5 className="outline none w-full border border-gray-200 p-1 rounded"></h5>
</div>

<div className="mb-1">
<h5 className="outline none w-full border-gray-200 p-1 rounded">#3.250</h5>
</div>
</div>
<div className="mb-3" >
    <button type="submit" classNmae="text-center bg-[] w-full py-12 px-12 hover:bg-white hover:bg-whute hover:border hover:border-[] transition-all duration-150 rounded text-white hover:text-[#0B4F6C] cursor-pointer">Proceed to Pay</button>

</div>
        </form>
    </div>

</div>

        </Container>
      </Carousel>
    </div>
  );
}

export default Checkout;
