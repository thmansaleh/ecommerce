import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
function Item() {
  const Navigate = useNavigate()
  const products=useSelector(state=>state.home.products)

  return (
    <div class=" d-flex justify-content-around flex-wrap">
            
    {products.length>0&&products.map(e=>{

        return  <div onClick={()=>Navigate(`./product?id=${e.id}`)}
        className='  home-product-container'>
      
        <img src={e.thumbnail} alt='fije'/>
         
         <span className='product-name'>{e.title}</span>
         <div className='product-description'> {e.description}</div>

         <div className='product-price-container'>
          <div>{e.price} AED</div>
          <div className='product-price-previous'>{Math.round(e.price+e.price* e.discountPercentage/100)} AED</div>
         </div>

    </div>
    })}

</div>
  )
}

export default Item
