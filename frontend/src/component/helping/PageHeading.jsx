import React from 'react'
import logo from "../../assets/Logo.svg";

const PageHeading = ({icon=false, heading, iconImg}) => {
  return (
    <>
    <div className='d-flex align-items-center p-4' style={{color: "white"}}>
      <div className='d-flex align-items-center' style={{width: "50%"}}>
        {icon && iconImg}
        <h4 style={{margin: 0, paddingLeft: '10px', width: "50%", fontSize: "20px"}}>
        {heading}
        </h4>
      </div>
      <div style={{width: "50%"}}>
        <img src={logo} alt='' width={"60px"}/>
      </div>
    </div>
  </>
  )
}

export default PageHeading