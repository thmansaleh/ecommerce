import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const notify = () =>  toast.warning
  ('can not connect to server', {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  return <div className='register-container container'>

 
   <form>
    <h3 class="register-title">Register</h3>
    <div class="names-inputs">
  <input placeholder="First Name" type="text" />
  <input placeholder="Last Name" type="text" />
</div>
<input placeholder="Email" type="email"/>
    <input placeholder="Password" type="password" />
    <button onClick={()=>notify()}>Register</button>
    <div>
      <span class="create-account-title">I already have an account</span>
      <Link to='/login' class="sign-in-title">Login</Link>
    </div>
    {/* <svg class="arrow-back-page" xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="512" height="512"><path d="M19,10.5H10.207l2.439-2.439a1.5,1.5,0,0,0-2.121-2.122L6.939,9.525a3.505,3.505,0,0,0,0,4.95l3.586,3.586a1.5,1.5,0,0,0,2.121-2.122L10.207,13.5H19a1.5,1.5,0,0,0,0-3Z"/></svg> */}


  </form>
  <ToastContainer/>
  </div>
   
       
  
}

export default Register
