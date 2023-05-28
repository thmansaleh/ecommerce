import { useEffect } from "react"
import { ArrowBack } from "../../../Layout/arrow-back/ArrowBack"
import "./style.css"

const Profile = () => {
  useEffect(() => {
    const navg = document.getElementById('mobile-navigation')
    navg.style.display='none'
  }, []);
  return (
    <div className="profile-container">

  <form className="form" action>
  <h3 className="profile-title">My Profile</h3>
  <input defaultValue="othman" type="text" />
  <input placeholder="Email" type="email" defaultValue="thman.saleh@gmail.com" />
  <input placeholder="Password" type="password" defaultValue={100200300} />
  <span className="password-title">Change Password</span>
  <input value='0501455918' type="number" />
  <button type="submit">Save</button>
  <div>
    <ArrowBack/>

    {/* <svg className="arrow-back-page" xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width={512} height={512}><path d="M19,10.5H10.207l2.439-2.439a1.5,1.5,0,0,0-2.121-2.122L6.939,9.525a3.505,3.505,0,0,0,0,4.95l3.586,3.586a1.5,1.5,0,0,0,2.121-2.122L10.207,13.5H19a1.5,1.5,0,0,0,0-3Z" /></svg> */}
  </div>
  </form>
    </div>

  )
}

export default Profile