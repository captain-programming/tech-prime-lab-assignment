import React, { useState } from 'react';
import Sidebar from '../dashboard/Sidebar';
import logo from "../../assets/Logo.svg";
import "./createProject.css"
import axios from "axios";
import { toast } from 'react-toastify';

const CreateProject = () => {
  const [createProject, setCreateProject] = useState();

  const handleOnchange = (e) => {
    const {name, value} = e.target;
    setCreateProject({...createProject, [name]: value});
  }

  const registerProject = async(data) => {
    try{
      let res = await axios.post("http://localhost:8080/project/create", data);
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

  const handleSunmit = (e) => {
    e.preventDefault();
    registerProject({...createProject, status: "Registered"});
  }

  return (
    <div className='d-flex dashboard'>  
      <Sidebar />
      <div className='dashboard-main'>
        <div className='d-flex align-items-center p-4' style={{color: "white"}}>
          <div className='d-flex align-items-center' style={{width: "50%"}}>
            <span class={`fa fa-fw fa-chevron-left field-icon`} style={{cursor: "pointer"}}></span>
            <h4 style={{margin: 0, paddingLeft: '15px', fontSize: "25px"}}>Project Listing</h4>
          </div>
          <div style={{width: "50%"}}>
           <img src={logo} alt='' />
          </div>
        </div>
        <div style={{paddingLeft: "25px", paddingRight: "25px", height: "85%"}}>
          <div className="shadow-lg bg-white rounded-2 pb-4" style={{height: "100%"}}>
            <form onSubmit={handleSunmit}>
            <div className='d-flex justify-content-between p-4 align-items-start'>
              <input type='text' placeholder='Enter Project Theme' className='rounded-3 p-3' style={{width: "60%", minHeight: "100px", textAlign: "start"}} onChange={handleOnchange} name='projectName' required/>
              <button style={{backgroundColor: "rgb(2,91,170)", color: "white", padding: "6px 30px", borderRadius: "25px", fontWeight: "500", border: "1px solid #025BAA", fontSize: "20px"}} type='submit'>Save Project</button>
            </div>
            <div className='form-option p-4'>
              <div>
                <p style={{ margin: 0, padding: 0, fontSize: "18px"}}>Reason:</p> 
                  <select style={{borderRadius: "10px", padding: "16px", width: "100%"}} onChange={handleOnchange} name='reason' required>
                    <option value="Business">Business</option>
                    <option value="DealerShip">DealerShip</option>
                    <option value="Transport">Transport</option>
                  </select>
              </div>
              <div>
                <p style={{ margin: 0, padding: 0, fontSize: "18px"}}>Type:</p> 
                  <select style={{borderRadius: "10px", padding: "16px", width: "100%"}} onChange={handleOnchange} name='type' required>
                    <option value="Internal">Internal</option>
                    <option value="External">External</option>
                    <option value="Vendor">Vendor</option>
                  </select>
              </div>
              <div>
                <p style={{ margin: 0, padding: 0, fontSize: "18px"}}>Division:</p> 
                  <select style={{borderRadius: "10px", padding: "16px", width: "100%"}} onChange={handleOnchange} name='division' required>
                    <option value="Compressor">Compressor</option>
                    <option value="Filters">Filters</option>
                    <option value="Pumps">Pumps</option>
                    <option value="Glass">Glass</option>
                    <option value="Water Heater">Water Heater</option>
                  </select>
              </div>
              <div>
                <p style={{ margin: 0, padding: 0, fontSize: "18px"}}>Category:</p> 
                  <select style={{borderRadius: "10px", padding: "16px", width: "100%"}} onChange={handleOnchange} name='category' required>
                    <option value="Quality A">Quality A</option>
                    <option value="Quality B">Quality B</option>
                    <option value="Quality C">Quality C</option>
                    <option value="Quality D">Quality D</option>
                  </select>
              </div>
              <div>
                <p style={{ margin: 0, padding: 0, fontSize: "18px"}}>Priority:</p> 
                  <select style={{borderRadius: "10px", padding: "16px", width: "100%"}} onChange={handleOnchange} name='priority' required>
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                  </select>
              </div>
              <div>
                <p style={{ margin: 0, padding: 0, fontSize: "18px"}}>Department:</p> 
                  <select style={{borderRadius: "10px", padding: "16px", width: "100%"}} onChange={handleOnchange} name='department' required>
                    <option value="Strategy">Strategy</option>
                    <option value="Finance">Finance</option>
                    <option value="Quality">Quality</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Stores">Stores</option>
                  </select>
              </div>
              <div>
                <p style={{ margin: 0, padding: 0, fontSize: "18px"}}>Start Dates as per Project Plan:</p> 
                <input type='date' placeholder='D Month, Yr' style={{borderRadius: "10px", padding: "16px", width: "100%"}} onChange={handleOnchange} name='startDate' required/>
              </div>
              <div>
                <p style={{ margin: 0, padding: 0, fontSize: "18px"}}>End Dates as per Project Plan:</p> 
                <input type='date' placeholder='D Month, Yr' style={{borderRadius: "10px", padding: "16px", width: "100%"}} onChange={handleOnchange} name='endDate' required/>
              </div>
              <div>
                <p style={{ margin: 0, padding: 0, fontSize: "18px"}}>Location:</p> 
                  <select style={{borderRadius: "10px", padding: "16px", width: "100%"}} onChange={handleOnchange} name='location' required>
                    <option value="Pune">Pune</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
              </div>
            </div>
            <div className='d-flex justify-content-end' style={{width: "90%", margin: "auto"}}>
              <p style={{width: "37%", fontSize: "20px"}}>Status: <b>Registered</b></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProject