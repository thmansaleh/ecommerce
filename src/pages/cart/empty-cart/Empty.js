import './style.css'
import { useNavigate } from 'react-router-dom'

const Empty = () => {
  const navigate= useNavigate()
  return (
    <>     

    <div class="cart-empty-container">
  <h4>
Your shopping bag is empty!</h4>

<img src="https://static.vecteezy.com/system/resources/previews/004/964/514/large_2x/young-man-shopping-push-empty-shopping-trolley-free-vector.jpg" alt="empty cart"/>

<button onClick={()=>navigate('/')}>CONTINUE SHOPPING</button>
</div>
    </>
  )
}

export default Empty