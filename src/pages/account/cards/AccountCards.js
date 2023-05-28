import heart from './icons/heart.png';
import shope from './icons/shopping-bag.png';
import './style.css'

const AccountCards = () => {
  return (

    <div class="account-cards">

      <div class="account-card-container">
        <img srcset="" src={shope} alt="shop" />
        <span>My Orders </span>
        <button>View</button>
      </div>

      <div class="account-card-container">
        <img srcset="" src={heart} alt="shop" />
        <span>My Orders </span>
        <button>View</button>
      </div>

      <div class="account-card-container">
        <img srcset="" src={shope} alt="shop" />
        <span>My Orders </span>
        <button>View</button>
      </div>


    </div>

  )
}

export default AccountCards
