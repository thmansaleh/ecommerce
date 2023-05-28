import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
  const navigate =useNavigate()
  const notify = () =>  toast.error('username and password not correct', {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  return (
    
<div class="login-container">
  
  <form class="form" action="">
    
    <h3 class="sign-in-title">Sign In</h3>
  
   <input placeholder="Email" type="email" />

    
    
    
<input placeholder="Password" type="password" />
  
    <span class="forgot-password">Forgot Password?</span>
    <button type="submit" onClick={()=>notify()}>Sign In</button>
    <div>
      <span class="create-account-title">Don't have an account?</span>
      <Link to='/register' class="register-title">Register</Link>
    </div>
  </form>
 <ToastContainer/>
</div>
  )
}

export default Login