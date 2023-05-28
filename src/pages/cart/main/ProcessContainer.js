import { useSelector } from "react-redux"
import { useEffect ,useState} from "react"

const ProcessContainer = () => {
  const total=useSelector(state=>state.cart.total)


  return (
    <div class="cart-proceed">

                <div class="cart-cobon-container">
                    <input placeholder="Cobon" type="text" />
                    <button >Add</button>
                </div>

                <div class="cart-total-section">
                    <span class="total-title">Total Amount</span>
                    <span>{total} AED</span>
                </div>
                <button class="proceed-to-checkout-btn">Proceed to checkout</button>
            </div>
  )
}

export default ProcessContainer
