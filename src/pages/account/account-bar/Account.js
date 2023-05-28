import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const AccountBarItem = ({link,reDirect}) => {
  const navigate=useNavigate()
  const isLogIn =useSelector(state=>state.account.isLogIn)

  return (
    <div class="account-bar-item" onClick={()=>{ isLogIn ? navigate(link):navigate('/login') }} >
        <div class="account-bar-icon">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
          
    <span>Account</span>
        </div>
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
      </div>
  )
}

export default AccountBarItem
