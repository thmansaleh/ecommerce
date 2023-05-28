import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const Cards = ({link}) => {
  const navigate=useNavigate()
    const isLogIn =useSelector(state=>state.account.isLogIn)
  
  return (
    <div class="account-bar-item"     onClick={()=>{ isLogIn ? navigate(link):navigate('/login') }}>
    
        <div class="account-bar-icon">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><circle cx="5.5" cy="15.5" r="1.5"/><path d="M19,3H5A5.006,5.006,0,0,0,0,8v8a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V8A5.006,5.006,0,0,0,19,3ZM5,5H19a3,3,0,0,1,3,3H2A3,3,0,0,1,5,5ZM19,19H5a3,3,0,0,1-3-3V10H22v6A3,3,0,0,1,19,19Z"/></svg>
          
        <span>Cards</span>
        </div>
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
      </div>
  )
}

export default Cards
