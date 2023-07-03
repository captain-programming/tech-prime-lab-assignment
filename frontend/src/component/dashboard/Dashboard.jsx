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
      let res = await axios.get(`http://localhost:8080/project/counter`);
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
        <div className='d-flex justify-content-between gap-4 status-board' >
          <div className="status-card shadow-sm p-3 pt-2 bg-white rounded ">
            <p>Total Projects</p>
            <h2>{counterData?.totalProjects}</h2>
          </div>
          <div className="status-card shadow-sm p-3 bg-white rounded pt-2 ">
            <p>Closed</p>
            <h2>{counterData?.closedProjects}</h2>
          </div>
          <div className="status-card shadow-sm p-3 bg-white rounded pt-2 ">
            <p>Running</p>
            <h2>{counterData?.runningProjects}</h2>
          </div>
          <div className="status-card shadow-sm p-3 bg-white rounded pt-2 ">
            <p>Closure Delay</p>
            <h2>{counterData?.runningExpiredProjects}</h2>
          </div>
          <div className="status-card shadow-sm p-3 bg-white rounded pt-2 ">
            <p>Cancelled</p>
            <h2>{counterData?.cancelledProjects}</h2>
          </div>
        </div>
        <div className='chart'>
          <h5 className='mb-4 mt-4'>Department wise - Total Vs Closed</h5>
          <DepartmentChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard