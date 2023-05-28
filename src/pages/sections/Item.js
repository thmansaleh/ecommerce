import { useSelector } from "react-redux"

const Item = () => {
    const products=useSelector(state=>state.sections.items)
  return (
    <div className='sections-items-container'>
    {products.map(e=>{
       //  return <Item/>
       return <div className='section-item'>
       <img   src={e.thumbnail} alt="My Image" />   
          <span>{e.brand}</span>
     </div>
    })}
   </div>
  )
}

export default Item