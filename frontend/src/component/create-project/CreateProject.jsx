import React, { useState } from 'react';
import Sidebar from '../dashboard/Sidebar';
import logo from "../../assets/Logo.svg";
import "./createProject.css"
import axios from "axios";
import { toast } from 'react-toastify';
import PageHeading from '../helping/PageHeading';

const CreateProject = () => {
  const [createProject, setCreateProject] = useState({category: "Quality A", department: "Strategy", division: "Compressor", location: "Pune", priority: "High", reason: "Business", type: "Internal"});

  const handleOnchange = (e) => {
    const {name, value} = e.target;
    setCreateProject({...createProject, [name]: value});
  }

  const registerProject = async(data) => {
    try{
      let res = await axios.post(`https://tech-prime-lab-9ov4.onrender.com/project/create`, data);
      toast.success(res?.data?.message || 'New project added successfully', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
      });
    }catch(err){
      toast.error(err?.response?.data?.message || 'Something wrong', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
      });
    }
  }

  const minDateFun=()=>{
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return yyyy + '-' + mm + '-' + dd;
  }

  const minDateEnd=(startDate)=>{
    let nextDate = new Date(startDate);
    nextDate.setDate(nextDate.getDate() + 1);

    let dd = nextDate.getDate();
    let mm = nextDate.getMonth() + 1;
    let yyyy = nextDate.getFullYear();

    let nextDay = dd;
    let nextMonth = mm;
    let nextYear = yyyy;

    if (dd < 10) {
      nextDay = '0' + dd;
    }

    if (mm < 10) {
      nextMonth = '0' + mm;
    }

    return `${nextYear}-${nextMonth}-${nextDay}`;
  }

  const handleSunmit = (e) => {
    e.preventDefault();
    registerProject({...createProject, status: "Registered"});
  }

  return (
    <div className='d-flex dashboard'>  
      <Sidebar />
      <div className='dashboard-main'>
        <PageHeading heading={"Create Project"} iconImg={<span class={"fa fa-fw fa-chevron-left field-icon"} style={{cursor: "pointer"}}></span>} icon={true}/>
        <div style={{paddingLeft: "25px", paddingRight: "25px", height: "85%"}}>
          <div className="shadow-lg bg-white rounded-2 pb-4" style={{height: "100%"}}>
            <form onSubmit={handleSunmit}>
              <div className='d-flex justify-content-between p-4 align-items-start'>
                <input type='text' placeholder='Enter Project Theme' className='rounded-3 p-3' style={{width: "60%", minHeight: "80px", textAlign: "start"}} onChange={handleOnchange} name='projectName' required/>
                <button style={{backgroundColor: "rgb(2,91,170)", color: "white", padding: "6px 30px", borderRadius: "25px", fontWeight: "500", border: "1px solid #025BAA", fontSize: "17px"}} type='submit'>Save Project</button>
              </div>
              <div className='form-option p-4'>
                <div>
                  <p style={{ margin: 0, padding: 0, fontSize: "14px", color: "gray"}}>Reason:</p> 
                    <select style={{borderRadius: "10px", padding: "11px", width: "100%"}} onChange={handleOnchange} name='reason' required defaultValue={'Business'}>
                      <option value="Business">Business</option>
                      <option value="DealerShip">DealerShip</option>
                      <option value="Transport">Transport</option>
                    </select>
                </div>
                <div>
                  <p style={{ margin: 0, padding: 0, fontSize: "14px", color: "gray"}}>Type:</p> 
                    <select style={{borderRadius: "10px", padding: "11px", width: "100%"}} onChange={handleOnchange} name='type' required defaultValue={'Internal'}>
                      <option value="Internal">Internal</option>
                      <option value="External">External</option>
                      <option value="Vendor">Vendor</option>
                    </select>
                </div>
                <div>
                  <p style={{ margin: 0, padding: 0, fontSize: "14px", color: "gray"}}>Division:</p> 
                    <select style={{borderRadius: "10px", padding: "11px", width: "100%"}} onChange={handleOnchange} name='division' required defaultValue={'Compressor'}>
                      <option value="Compressor">Compressor</option>
                      <option value="Filters">Filters</option>
                      <option value="Pumps">Pumps</option>
                      <option value="Glass">Glass</option>
                      <option value="Water Heater">Water Heater</option>
                    </select>
                </div>
                <div>
                  <p style={{ margin: 0, padding: 0, fontSize: "14px", color: "gray"}}>Category:</p> 
                    <select style={{borderRadius: "10px", padding: "11px", width: "100%"}} onChange={handleOnchange} name='category' required defaultValue={'Quality A'}>
                      <option value="Quality A">Quality A</option>
                      <option value="Quality B">Quality B</option>
                      <option value="Quality C">Quality C</option>
                      <option value="Quality D">Quality D</option>
                    </select>
                </div>
                <div>
                  <p style={{ margin: 0, padding: 0, fontSize: "14px", color: "gray"}}>Priority:</p> 
                    <select style={{borderRadius: "10px", padding: "11px", width: "100%"}} onChange={handleOnchange} name='priority' required defaultValue={'High'}>
                      <option value="High">High</option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                    </select>
                </div>
                <div>
                  <p style={{ margin: 0, padding: 0, fontSize: "14px", color: "gray"}}>Department:</p> 
                    <select style={{borderRadius: "10px", padding: "11px", width: "100%"}} onChange={handleOnchange} name='department' required defaultValue={'Strategy'}>
                      <option value="Strategy">Strategy</option>
                      <option value="Finance">Finance</option>
                      <option value="Quality">Quality</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Stores">Stores</option>
                    </select>
                </div>
                <div>
                  <p style={{ margin: 0, padding: 0, fontSize: "14px", color: "gray"}}>Start Dates as per Project Plan:</p> 
                  <input type='date' placeholder='D Month, Yr' style={{borderRadius: "10px", padding: "11px", width: "100%"}} onChange={handleOnchange} name='startDate' required min={minDateFun()}/>
                </div>
                <div>
                  <p style={{ margin: 0, padding: 0, fontSize: "14px", color: "gray"}}>End Dates as per Project Plan:</p> 
                  <input type='date' placeholder='D Month, Yr' style={{borderRadius: "10px", padding: "11px", width: "100%"}} onChange={handleOnchange} name='endDate' required min={minDateEnd(createProject.startDate)}/>
                </div>
                <div>
                  <p style={{ margin: 0, padding: 0, fontSize: "14px", color: "gray"}}>Location:</p> 
                    <select style={{borderRadius: "10px", padding: "11px", width: "100%"}} onChange={handleOnchange} name='location' required defaultValue={'Pune'}>
                      <option value="Pune">Pune</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                    </select>
                </div>
              </div>
              <div className='d-flex justify-content-end' style={{width: "90%", margin: "auto"}}>
                <p style={{width: "37%", fontSize: "16px", color: "gray"}}>Status: <b>Registered</b></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProject