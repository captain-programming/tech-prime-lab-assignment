import React, { useEffect, useState } from 'react'
import Sidebar from '../dashboard/Sidebar';
import logo from "../../assets/Logo.svg";
import "./projectList.css"
import ProjectTable from './ProjectTable';
import Pagination from './Pagination';
import axios from 'axios';
import PageHeading from '../helping/PageHeading';

const ProjectList = () => {
  const [allProject, setAllProject] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [editWork, setEditWork] = useState(0);

  const registerProject = async() => {
    try{
      let res = await axios.get(`http://localhost:8080/project/all-project?page=${page}&limit=5&sort=${sort}&searchTerm=${search}`);
      setAllProject(res.data);
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    registerProject();
  }, [page, sort, search, editWork]);

  return (
    <div className='d-flex dashboard'>
      <Sidebar />
      <div className='dashboard-main'>
        <PageHeading heading={"Project Listing"} iconImg={<span class={"fa fa-fw fa-chevron-left field-icon"} style={{cursor: "pointer"}}></span>} icon={true}/>
        <div style={{paddingLeft: "25px", paddingRight: "25px"}}>
          <div class="shadow-lg bg-white rounded-2 pb-3">
            <div className='d-flex justify-content-between'>
              <div class="p-4 d-flex justify-content-start align-items-center">
                <span class="fa fa-search search-icon"></span>
                <input type="text" class="form-control search-input" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
              </div>
              <div class="p-4 d-flex align-items-center justify-content-center gap-3">
                <p style={{color: "#BBC0C6", margin: 0, padding: 0, fontSize: "18px"}}>Sort By:</p> 
                  <select style={{border: "none", fontWeight: "500"}} onChange={(e) => setSort(e.target.value)}>
                    <option value="priority">Priority</option>
                    <option value="reason">Reason</option>
                    <option value="type">Type</option>
                    <option value="division">Division</option>
                    <option value="category">Category</option>
                    <option value="department">Dept.</option>
                    <option value="location">Location</option>
                    <option value="status">Status</option>
                  </select>
              </div>
            </div>
            <ProjectTable allProject={allProject?.projects} setEditWork={setEditWork}/>
          </div>
          <div style={{marginTop: '20px'}}>
          <Pagination total={allProject?.totalPages} active={page} setPage = {setPage}/>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectList