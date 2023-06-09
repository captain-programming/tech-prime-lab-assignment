import React from 'react';
import { AiOutlineDoubleLeft, AiOutlineLeft, AiOutlineDoubleRight, AiOutlineRight } from "react-icons/ai";

const Pagination = ({ total = 0, active = 0, setPage }) => {
  const startPage = Math.max(active - 1, 1);
  const endPage = Math.min(startPage + 2, total);
  const pageNumbers = [...Array(endPage - startPage + 1)].map((_, i) => startPage + i);

  return (
    <div style={{ paddingLeft: "25px", paddingRight: "25px" }} className='d-flex justify-content-center align-items-center gap-3'>
      <button style={{border: "none"}} onClick={() => setPage(1)} disabled={active===1}>
        <AiOutlineDoubleLeft fontSize={"15px"}/>
      </button>
      <button style={{border: "none"}} onClick={() => setPage(active-1)} disabled={active===1}>
        <AiOutlineLeft fontSize={"15px"}/>
      </button>
      {pageNumbers.map(page => (
        <button key={page} style={{ margin: 0, fontSize: "15px", border: "none", borderRadius: "50%", padding: "7px 14px", backgroundColor: active===page ? "rgb(207,226,255)" : ""}} disabled={active===page} onClick={() => setPage(page)}>
          {page}
        </button>
      ))}
      <button style={{border: "none"}} onClick={() => setPage(active+1)} disabled={active===total}>
      <AiOutlineRight fontSize={"15px"}/>
      </button>
      <button style={{border: "none"}} onClick={() => setPage(total)} disabled={active===total}>
        <AiOutlineDoubleRight fontSize={"15px"}/>
      </button>
    </div>
  );
}

export default Pagination;
