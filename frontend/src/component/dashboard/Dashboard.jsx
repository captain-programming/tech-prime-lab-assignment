import React, { useEffect, useState } from 'react';
import "./dashboard.css";
import Sidebar from './Sidebar';
import logo from "../../assets/Logo.svg";
import DepartmentChart from './DepartmentChart';
import axios from 'axios';

const Dashboard = () => {
  const [counterData, setCounterData] = useState({});

  const getCount = async() => {
    try{
      let res = await axios.post("http://localhost:8080/project/counter");
      setCounterData(res.data);
    }catch(err){
      console.log(err)
    }
  }

  // console.log(counterData);

  useEffect(()=>{
    getCount();
  }, [])
  
  return (
    <div className='d-flex dashboard'>
      <Sidebar />
      <div className='dashboard-main'>
        <div className='d-flex align-items-center p-4' style={{color: "white"}}>
          <h4 style={{margin: 0, paddingLeft: '15px', width: "50%", fontSize: "25px"}}>Dashboard</h4>
          <div style={{width: "50%"}}>
           <img src={logo} alt='' />
          </div>
        </div>
        <div className='d-flex justify-content-between gap-4' style={{paddingLeft: "25px", paddingRight: "25px"}}>
          <div style={{borderLeft: "7px solid #0DC8E8", width: '100%'}} class="shadow-sm p-3 bg-white rounded">
            <p style={{fontWeight: "500"}}>Total Projects</p>
            <h2 style={{margin:"-20px 0px -10px 0px", padding:0, fontSize: "50px"}}>{counterData?.totalProjects}</h2>
          </div>
          <div style={{borderLeft: "7px solid #0DC8E8", width: '100%'}} className="shadow-sm p-3 bg-white rounded">
            <p style={{fontWeight: "500"}}>Closed</p>
            <h2 style={{margin:"-20px 0px -10px 0px", padding:0, fontSize: "50px"}}>{counterData?.closedProjects}</h2>
          </div>
          <div style={{borderLeft: "7px solid #0DC8E8", width: '100%'}} className="shadow-sm p-3 bg-white rounded">
            <p style={{fontWeight: "500"}}>Running</p>
            <h2 style={{margin:"-20px 0px -10px 0px", padding:0, fontSize: "50px"}}>{counterData?.runningProjects}</h2>
          </div>
          <div style={{borderLeft: "7px solid #0DC8E8", width: '100%'}} className="shadow-sm p-3 bg-white rounded">
            <p style={{fontWeight: "500"}}>Closure Delay</p>
            <h2 style={{margin:"-20px 0px -10px 0px", padding:0, fontSize: "50px"}}>{counterData?.runningExpiredProjects}</h2>
          </div>
          <div style={{borderLeft: "7px solid #0DC8E8", width: '100%'}} className="shadow-sm p-3 bg-white rounded">
            <p style={{fontWeight: "500"}}>Cancelled</p>
            <h2 style={{margin:"-20px 0px -10px 0px", padding:0, fontSize: "50px"}}>{counterData?.cancelledProjects}</h2>
          </div>
        </div>
        <div style={{paddingLeft: "25px", paddingRight: "25px",}}>
          <h4 className='mb-4 mt-4'>Department wise - Total Vs Closed</h4>
          <DepartmentChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard