import React, { useEffect, useState } from 'react';
import "./dashboard.css";
import Sidebar from './Sidebar';
import DepartmentChart from './DepartmentChart';
import axios from 'axios';
import PageHeading from '../helping/PageHeading';

const Dashboard = () => {
  const [counterData, setCounterData] = useState({});

  const getCount = async() => {
    try{
      let res = await axios.get(`https://tech-prime-lab-9ov4.onrender.com/project/counter`);
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
        <PageHeading heading={'Dashboard'} />
        <div className='d-flex justify-content-between gap-4' style={{paddingLeft: "25px", paddingRight: "25px"}}>
          <div style={{borderLeft: "5px solid #0DC8E8", width: '100%'}} class="shadow-sm p-3 pt-2 bg-white rounded">
            <p style={{fontWeight: "500", color: "gray"}}>Total Projects</p>
            <h2 style={{margin:"-15px 0px -10px 0px", padding:0, fontSize: "35px"}}>{counterData?.totalProjects}</h2>
          </div>
          <div style={{borderLeft: "5px solid #0DC8E8", width: '100%'}} className="shadow-sm p-3 bg-white rounded pt-2">
            <p style={{fontWeight: "500", color: "gray"}}>Closed</p>
            <h2 style={{margin:"-15px 0px -10px 0px", padding:0, fontSize: "35px"}}>{counterData?.closedProjects}</h2>
          </div>
          <div style={{borderLeft: "5px solid #0DC8E8", width: '100%'}} className="shadow-sm p-3 bg-white rounded pt-2">
            <p style={{fontWeight: "500", color: "gray"}}>Running</p>
            <h2 style={{margin:"-15px 0px -10px 0px", padding:0, fontSize: "35px"}}>{counterData?.runningProjects}</h2>
          </div>
          <div style={{borderLeft: "5px solid #0DC8E8", width: '100%'}} className="shadow-sm p-3 bg-white rounded pt-2">
            <p style={{fontWeight: "500", color: "gray"}}>Closure Delay</p>
            <h2 style={{margin:"-15px 0px -10px 0px", padding:0, fontSize: "35px"}}>{counterData?.runningExpiredProjects}</h2>
          </div>
          <div style={{borderLeft: "5px solid #0DC8E8", width: '100%'}} className="shadow-sm p-3 bg-white rounded pt-2">
            <p style={{fontWeight: "500", color: "gray"}}>Cancelled</p>
            <h2 style={{margin:"-15px 0px -10px 0px", padding:0, fontSize: "35px"}}>{counterData?.cancelledProjects}</h2>
          </div>
        </div>
        <div style={{paddingLeft: "25px", paddingRight: "25px",}}>
          <h5 className='mb-4 mt-4'>Department wise - Total Vs Closed</h5>
          <DepartmentChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard