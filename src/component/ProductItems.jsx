import React from 'react'
import { Link } from 'react-router';

function ProductItem({ productitems }) {
  return (
    <div className='border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col'>
      {/* Product Image */}
      <div className='relative pt-[100%] overflow-hidden'>
        <img 
          src={productitems.img || "/img/bag13.jpg"} 
          className='absolute top-0 left-0 w-full h-full object-cover'
          alt={productitems.name || "Product image"} 
        />
      </div>
      
      {/* Product Info */}
      <div className='p-4 flex-grow flex flex-col'>
        <div className='mb-4'>
          <h5 className='font-semibold text-lg line-clamp-2'>{productitems.name}</h5>
          <h6 className='font-bold text-[#0B4F6C] text-xl mt-1'>${productitems.price?.toFixed(2)}</h6>
        </div>
        
        {/* Buttons */}
        <div className='mt-auto flex flex-col sm:flex-row gap-3'>
          <button 
            type='button' 
            className='w-full sm:w-auto flex-grow py-2 px-4 capitalize bg-[#0B4F6C] text-white rounded hover:bg-[#0c5a7a] transition-colors'
          >
            Add to cart
          </button>
          <Link 
            to={`/details/${productitems.id}`} 
            className='w-full sm:w-auto flex-grow py-2 px-4 capitalize border border-[#0B4F6C] text-[#0B4F6C] rounded hover:bg-gray-100 text-center transition-colors'
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;