import React, {useContext} from 'react'
import Container from './Container'
import ProductItems from './ProductItems'
import { ProductContext } from '../context/ProductContext'

function Featured() {
   
   const { featured }=useContext(ProductContext)
    return (
    <Container>
      <div className='grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-1 md:gap-3'>
          <h1>Products</h1>
          {!featured || featured.length < 1 ?(
              <h1 className="text-center">No product yet</h1>
          ): (
              <>
              { featured.map((items)=> (
                  <ProductItems key = {items.id} productitems={items}/>
              ))}
              </>
          )}
        
      </div>
      </Container>
    )
}

export default Featured
