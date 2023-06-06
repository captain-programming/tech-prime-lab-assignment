import React from 'react'
import {AiOutlineDoubleLeft, AiOutlineLeft, AiOutlineDoubleRight, AiOutlineRight} from "react-icons/ai";

const Pagination = ({total=0, active=0}) => {
  return (
    <div style={{paddingLeft: "25px", paddingRight: "25px"}} className='d-flex justify-content-center align-items-center gap-3'>
      <AiOutlineDoubleLeft fontSize={"20px"} cursor={"pointer"}/>
      <AiOutlineLeft fontSize={"20px"} cursor={"pointer"}/>
      <p style={{margin: 0, fontSize: "18px", cursor: "pointer"}}>2</p>
      <p style={{margin: 0, fontSize: "18px", cursor: "pointer"}}>3</p>
      <p style={{margin: 0, fontSize: "18px", cursor: "pointer"}}>4</p>
      <p style={{margin: 0, fontSize: "18px", cursor: "pointer"}}>{total}</p>
      <AiOutlineRight fontSize={"20px"}/>
      <AiOutlineDoubleRight fontSize={"20px"} cursor={"pointer"}/>
    </div>
  )
}

export default Pagination;