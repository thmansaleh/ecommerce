import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Heple = ({link}) => {
  const navigate=useNavigate()
  const isLogIn =useSelector(state=>state.account.isLogIn)

  return (
    <div class="account-bar-item" onClick={()=>{ isLogIn ? navigate(link):navigate('/login') }}>
        <div class="account-bar-icon">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m13.5,12c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm3.5-1.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm-10,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm17,1.84v6.66c0,2.757-2.243,5-5,5h-5.917C6.082,24,.47,19.208.03,12.854c-.241-3.476,1.027-6.878,3.479-9.333S9.363-.206,12.836.029c6.26.425,11.164,5.833,11.164,12.312Zm-2,0c0-5.431-4.084-9.962-9.299-10.316-.229-.016-.458-.023-.686-.023-2.656,0-5.209,1.048-7.091,2.933-2.044,2.046-3.101,4.883-2.899,7.782.373,5.38,5.024,9.285,11.059,9.285h5.917c1.654,0,3-1.346,3-3v-6.66Z"/></svg>
          
        <span> Help</span>
        </div>
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
      </div>
  )
}

export default Heple
