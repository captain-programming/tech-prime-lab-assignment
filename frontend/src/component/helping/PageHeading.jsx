import React, { useContext } from 'react'
import logo from "../../assets/Logo.svg";
import { AuthContext } from '../AuthContext';
import logout from "../../assets/Logout.svg";
import "./PageHeading.css";

const PageHeading = ({icon=false, heading, iconImg}) => {
  const {handleLogout} = useContext(AuthContext);
  return (
    <>
    <div className='d-flex align-items-center p-4 page-heading'>
      <div className='d-flex align-items-center heading-logo'>
        {icon && iconImg}
        <h4>
        {heading}
        </h4>
      </div>
      <div className='imglogo-heading'>
        <img src={logo} alt=''/>
      </div>
      <div className='logout-heading'>
        <img src={logout} alt='Logout' onClick={handleLogout}/>
      </div>

    </div>
  </>
  )
}

export default PageHeading