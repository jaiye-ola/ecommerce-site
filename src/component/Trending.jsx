import React, {useContext} from 'react'
import Container from './Container'
import ProductItems from './ProductItems'
import { ProductContext } from '../context/ProductContext'

function Trending() {
    const {trending} = useContext(ProductContext)
    console.log(trending);
    
  return (
   <Container>
    <div className='grid grid-cols-3 justify-center items-center gap-3'>
        <h1>Featured Products</h1>
        {trending.map((items)=>(
          <ProductItems key={items.id}  productitems={items} />
        ))}
    </div>
   </Container>
  )
}

export default Trending
