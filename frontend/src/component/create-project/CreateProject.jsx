import React, { useState } from 'react';
import Sidebar from '../dashboard/Sidebar';
import logo from "../../assets/Logo.svg";
import "./createProject.css"
import axios from "axios";
import { toast } from 'react-toastify';
import PageHeading from '../helping/PageHeading';

const CreateProject = () => {
  const [createProject, setCreateProject] = useState({category: "Quality A", department: "Strategy", division: "Compressor", location: "Pune", priority: "High", reason: "Business", type: "Internal", endDate: '', startDate: '', projectName: ""});
  const [error, setError] = useState({projectName: "", startDate: "", endDate: ""});

  const handleOnchange = (e) => {
    const {name, value} = e.target;
    if(name==="startDate" && createProject.endDate !== ''){
      setCreateProject({...createProject, startDate: value, endDate: ''});
    }else{
      setCreateProject({...createProject, [name]: value});
    }
    
  }

  const checkValidation = (data) => {
    let temp = { ...error };
    if("projectName" in data){
      temp.projectName = data.projectName === "" ? "Project Theme reuired" : ""
    }
    if ("startDate" in data) {
      temp.startDate = data.startDate === "" ? "Start date is required" : ""
    }
    if ("endDate" in data) {
      temp.endDate = data.endDate === "" ? "End date is required" : ""
    }

    setError({...temp});
    return Object.values(temp).every((x) => x === "");
  }

  console.log(error)

  const registerProject = async(data) => {
    try{
      let res = await axios.post(`http://localhost:8080/project/create`, data);
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
    if(checkValidation(createProject)){
      registerProject({...createProject, status: "Registered"});
    }
    // console.log(createProject)
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
                <div className='w-100'>
                  <input type='text' placeholder='Enter Project Theme' className='title-input' onChange={handleOnchange} name='projectName' style={{borderColor: error.projectName ? "red" : "", border: "1px solid gray"}}/>
                  {error.projectName && <p style={{color: "red", fontSize: "15px"}}>{error.projectName}</p>}
                </div>
                <button className='submit-form-btn' type='submit'>Save Project</button>
              </div>
              <div className='form-option p-4'>
                <div className='single-form-option'>
                  <p className='form-option-title'>Reason:</p> 
                    <select onChange={handleOnchange} name='reason' required defaultValue={'Business'}>
                      <option value="Business">Business</option>
                      <option value="DealerShip">DealerShip</option>
                      <option value="Transport">Transport</option>
                    </select>
                </div>
                <div className='single-form-option'>
                  <p className='form-option-title'>Type:</p> 
                    <select onChange={handleOnchange} name='type' required defaultValue={'Internal'}>
                      <option value="Internal">Internal</option>
                      <option value="External">External</option>
                      <option value="Vendor">Vendor</option>
                    </select>
                </div>
                <div className='single-form-option'>
                  <p className='form-option-title'>Division:</p> 
                    <select onChange={handleOnchange} name='division' required defaultValue={'Compressor'}>
                      <option value="Compressor">Compressor</option>
                      <option value="Filters">Filters</option>
                      <option value="Pumps">Pumps</option>
                      <option value="Glass">Glass</option>
                      <option value="Water Heater">Water Heater</option>
                    </select>
                </div>
                <div className='single-form-option'>
                  <p className='form-option-title'>Category:</p> 
                    <select onChange={handleOnchange} name='category' required defaultValue={'Quality A'}>
                      <option value="Quality A">Quality A</option>
                      <option value="Quality B">Quality B</option>
                      <option value="Quality C">Quality C</option>
                      <option value="Quality D">Quality D</option>
                    </select>
                </div>
                <div className='single-form-option'>
                  <p className='form-option-title'>Priority:</p> 
                    <select onChange={handleOnchange} name='priority' required defaultValue={'High'}>
                      <option value="High">High</option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                    </select>
                </div>
                <div className='single-form-option'>
                  <p className='form-option-title'>Department:</p> 
                    <select onChange={handleOnchange} name='department' required defaultValue={'Strategy'}>
                      <option value="Strategy">Strategy</option>
                      <option value="Finance">Finance</option>
                      <option value="Quality">Quality</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Stores">Stores</option>
                    </select>
                </div>
                <div className='single-form-option'>
                  <p className='form-option-title' style={{color: error.startDate ? "red" : ""}}>Start Dates as per Project Plan:</p> 
                  <input type='date' placeholder='D Month, Yr' onChange={handleOnchange} name='startDate' min={minDateFun()} value={createProject.startDate} style={{border: error.startDate ? "1px solid red" :"1px solid gray"}}/>
                  {error.startDate && <p style={{color: "red", fontSize: "15px"}}>{error.startDate}</p>}
                </div>
                <div className='single-form-option'>
                  <p className='form-option-title' style={{color: error.endDate ? "red" : ""}}>End Dates as per Project Plan:</p> 
                  <input type='date' placeholder='D Month, Yr' onChange={handleOnchange} min={minDateEnd(createProject.startDate)} name='endDate' value={createProject.endDate} style={{border: error.endDate ? "1px solid red" :"1px solid gray"}}/>
                  {error.endDate && <p style={{color: "red", fontSize: "15px"}}>{error.endDate}</p>}
                </div>
                <div className='single-form-option'>
                  <p className='form-option-title'>Location:</p> 
                    <select onChange={handleOnchange} name='location' required defaultValue={'Pune'}>
                      <option value="Pune">Pune</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                    </select>
                </div>
              </div>
              <div className='d-flex justify-content-end status-option'>
                <p>Status: <b>Registered</b></p>
              </div>
              <button className='submit-form-btn-2' type='submit'>Save Project</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProject