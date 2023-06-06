import React, { useEffect, useState } from 'react'
import Sidebar from '../dashboard/Sidebar';
import logo from "../../assets/Logo.svg";
import "./projectList.css"
import ProjectTable from './ProjectTable';
import Pagination from './Pagination';
import axios from 'axios';

const ProjectList = () => {
  const [allProject, setAllProject] = useState([]);

  const registerProject = async() => {
    try{
      let res = await axios.post("http://localhost:8080/project/all-project");
      setAllProject(res.data);
    }catch(err){
      console.log(err)
    }
  }

  console.log(allProject);

  useEffect(()=>{
    registerProject();
  }, []);

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
        <div style={{paddingLeft: "25px", paddingRight: "25px"}}>
          <div class="shadow-lg bg-white rounded-2 pb-3">
            <div className='d-flex justify-content-between'>
              <div class="p-4 d-flex justify-content-start align-items-center">
                <span class="fa fa-search search-icon"></span>
                <input type="text" class="form-control search-input" placeholder="Search"/>
              </div>
              <div class="p-4 d-flex align-items-center justify-content-center gap-3">
                <p style={{color: "#BBC0C6", margin: 0, padding: 0, fontSize: "18px"}}>Sort By:</p> 
                  <select style={{border: "none", fontWeight: "500"}}>
                    <option value="Priority">Priority</option>
                    <option value="Reason">Reason</option>
                    <option value="Type">Type</option>
                    <option value="Division">Division</option>
                    <option value="Category">Category</option>
                    <option value="Category">Dept.</option>
                    <option value="Category">Location</option>
                    <option value="Category">Status</option>
                  </select>
              </div>
            </div>
            <ProjectTable allProject={allProject}/>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default ProjectList