import { useNavigate } from 'react-router-dom'
import './style.css'
import { ArrowBack } from '../../../Layout/arrow-back/ArrowBack'

export const OpenAccount = () => {
    const navigate =useNavigate()
    return (
       
        <div className=''>
         <ArrowBack/>
           
<br/>
<br/>
<br/>
            <span  className='open-account-title '>Pleas login to continue</span>
    
            <div className='d-flex justify-content-start open-account mt-3 '>
                <button onClick={()=>navigate('/login')}>login</button>
                <button onClick={()=>navigate('/register')}>Sign Up</button>
    
            </div>
            
        </div>
  
      )
}
