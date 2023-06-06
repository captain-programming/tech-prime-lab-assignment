import React, { useState } from 'react'
import createProjectActive from "../../assets/create-project-active.svg";
import createProject from "../../assets/create-project.svg";
import dashboardActive from "../../assets/Dashboard-active.svg";
import dashboard from "../../assets/Dashboard.svg";
import logout from "../../assets/Logout.svg";
import projectList from "../../assets/Project-list.svg";
import projectListActive from "../../assets/Project-list-active.svg";
import { NavLink, useLocation } from 'react-router-dom';
import "../dashboard/sidebar.css";

const Sidebar = () => {
  const {pathname} = useLocation();

  return (
    <div className="shadow-lg sidebar d-flex flex-column justify-content-between pt-5 pb-5">
        <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 gap-5">
          <div className='d-flex justify-content-between' style={{width: "100%"}}>
            {pathname==="/" && 
              <p style={{backgroundColor: "#035BAB", height: "100%", width: "6px"}} className="rounded-end"></p> 
            }
            <div className='d-flex flex-grow-1 align-items-center justify-content-center pt-2 pb-2'>
              <NavLink to={"/"}>
                <img src={pathname==="/" ? dashboardActive : dashboard} alt='Dashboard' width={"30px"} style={{cursor: "pointer"}}/>
              </NavLink>
            </div>
          </div>
          <div className='d-flex justify-content-between' style={{width: "100%"}}>
            {pathname==="/project-list" &&
              <p style={{backgroundColor: "#035BAB", height: "100%", width: "6px"}} className="rounded-end"></p>
            }
            <div className='d-flex flex-grow-1 align-items-center justify-content-center pt-2 pb-2'>
              <NavLink to={"/project-list"}>
                <img src={pathname==="/project-list" ? projectListActive : projectList} alt='Project List' width={"30px"} style={{cursor: "pointer"}}/>
              </NavLink>
            </div>
          </div>
          <p style={{border: "2px solid #E1E0E1", width: "40px"}}></p>
          <div className='d-flex justify-content-between' style={{width: "100%"}}>
            {pathname==="/create-project" &&
              <p style={{backgroundColor: "#035BAB", height: "100%", width: "6px"}} className="rounded-end"></p>
            }
            <div className='d-flex flex-grow-1 align-items-center justify-content-center pt-2 pb-2'>
              <NavLink to={"/create-project"}>
                <img src={pathname==="/create-project" ? createProjectActive : createProject} alt='Create Project' width={"30px"} style={{cursor: "pointer"}}/>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-end">
          <img src={logout} alt='Logout' style={{cursor: "pointer"}}/>
        </div>
      </div>
  )
}

export default Sidebar