import React from 'react';
import { AiOutlineDoubleLeft, AiOutlineLeft, AiOutlineDoubleRight, AiOutlineRight } from "react-icons/ai";

const Pagination = ({ total = 0, active = 0, setPage }) => {
  const startPage = Math.max(active - 1, 1);
  const endPage = Math.min(startPage + 2, total);
  const pageNumbers = [...Array(endPage - startPage + 1)].map((_, i) => startPage + i);

  return (
    <div style={{ paddingLeft: "25px", paddingRight: "25px" }} className='d-flex justify-content-center align-items-center gap-3'>
      <button style={{border: "none"}} onClick={() => setPage(1)} disabled={active===1}>
        <AiOutlineDoubleLeft fontSize={"20px"} />
      </button>
      <button style={{border: "none"}} onClick={() => setPage(active-1)} disabled={active===1}>
        <AiOutlineLeft fontSize={"20px"}/>
      </button>
      {pageNumbers.map(page => (
        <button key={page} style={{ margin: 0, fontSize: "18px", border: "none", borderRadius: "50%", padding: "8px 16px", backgroundColor: active===page ? "rgb(207,226,255)" : ""}} disabled={active===page}>
          {page}
        </button>
      ))}
      <button style={{border: "none"}} onClick={() => setPage(active+1)} disabled={active===total}>
      <AiOutlineRight fontSize={"20px"}/>
      </button>
      <button style={{border: "none"}} onClick={() => setPage(total)} disabled={active===total}>
        <AiOutlineDoubleRight fontSize={"20px"}/>
      </button>
    </div>
  );
}

export default Pagination;
