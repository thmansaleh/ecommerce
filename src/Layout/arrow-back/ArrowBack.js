
import { useNavigate } from "react-router-dom"
import './style.css'
export const ArrowBack = () => {
    const Navigate=useNavigate()
  return (
    <svg className="arrow-back" onClick={()=>Navigate(-1)} xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width={512} height={512}><path d="M19,10.5H10.207l2.439-2.439a1.5,1.5,0,0,0-2.121-2.122L6.939,9.525a3.505,3.505,0,0,0,0,4.95l3.586,3.586a1.5,1.5,0,0,0,2.121-2.122L10.207,13.5H19a1.5,1.5,0,0,0,0-3Z" /></svg>

  )
}
