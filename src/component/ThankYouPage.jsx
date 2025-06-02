function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center 0 p-6 gap-[200px]">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full text-center p-10 space-y-6">
        <div className="text-green-500 text-6xl">✨</div>
        <h1 className="text-3xl font-bold text-gray-800">Thank You!</h1>
        <p className="text-gray-600 text-lg">
          We appreciate you for taking the time. Your submission has been received!
        </p>
        <a 
          href="/" 
          className="mt-4 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition"
        >
          Go Back Home
        </a>
      </div>
  

    <div className="receipt">

    <div className="min-h-screen  flex items-center justify-center py-10 px-4">
      <div className=" w-full max-w-2xl shadow-lg rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Order Receipt</h2>

        <div className="border-t border-b py-4 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Order Number:</span>
            <span className="font-medium text-gray-800">#123456789</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium text-gray-800">May 30, 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Payment Method:</span>
            <span className="font-medium text-gray-800">Visa •••• 4242</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Items</h3>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">Porshe Bags</p>
              <p className="text-sm text-gray-500">Qty: 1</p>
            </div>
            <span className="text-gray-800 font-semibold">$120.00</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">co-operate bag</p>
              <p className="text-sm text-gray-500">Qty: 2</p>
            </div>
            <span className="text-gray-800 font-semibold">$300.00</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-800 font-medium">$420.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="text-gray-800 font-medium">$10.00</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-800 pt-2">
            <span>Total</span>
            <span>$430.00</span>
          </div>
        </div>

        <div className="text-center pt-6">
          <p className="text-gray-600">Thank you for your purchase!</p>
          <a href="/" className="mt-4 inline-block bg-gray-800 text-white px-6 py-2 rounded-xl hover:bg-gray-900 transition">
            Back to Home
          </a>
        </div>
      </div>
    </div>
    </div>
      </div>
  )
}



  


export default ThankYouPage;
