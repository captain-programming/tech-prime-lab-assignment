import React, { useContext, useState } from 'react'
import createProjectActive from "../../assets/create-project-active.svg";
import createProject from "../../assets/create-project.svg";
import dashboardActive from "../../assets/Dashboard-active.svg";
import dashboard from "../../assets/Dashboard.svg";
import logout from "../../assets/Logout.svg";
import projectList from "../../assets/Project-list.svg";
import projectListActive from "../../assets/Project-list-active.svg";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import "../dashboard/sidebar.css";
import { AuthContext } from '../AuthContext';

const Sidebar = () => {
  const {pathname} = useLocation();
  const {handleLogout} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogoutFun = () => {
    handleLogout();
    navigate("/");
  }

  return (
    <div className=" sidebar">
        <div className="first-section">
          <div className='d-flex justify-content-between' style={{width: "100%"}}>
            {pathname==="/" && 
              <p style={{backgroundColor: "#035BAB", height: "100%", width: "6px"}} className="rounded-end"></p> 
            }
            <div className='d-flex flex-grow-1 align-items-center justify-content-center pt-1 pb-1'>
              <NavLink to={"/"}>
                <img src={pathname==="/" ? dashboardActive : dashboard} alt='Dashboard' width={"25px"} style={{cursor: "pointer"}}/>
              </NavLink>
            </div>
          </div>
          <div className='d-flex justify-content-between' style={{width: "100%"}}>
            {pathname==="/project-list" &&
              <p style={{backgroundColor: "#035BAB", height: "100%", width: "6px"}} className="rounded-end"></p>
            }
            <div className='d-flex flex-grow-1 align-items-center justify-content-center pt-1 pb-1'>
              <NavLink to={"/project-list"}>
                <img src={pathname==="/project-list" ? projectListActive : projectList} alt='Project List' width={"25px"} style={{cursor: "pointer"}}/>
              </NavLink>
            </div>
          </div>
          <p className='dot-line'></p>
          <div className='d-flex justify-content-between' style={{width: "100%"}}>
            {pathname==="/create-project" &&
              <p style={{backgroundColor: "#035BAB", height: "100%", width: "6px"}} className="rounded-end"></p>
            }
            <div className='d-flex flex-grow-1 align-items-center justify-content-center pt-1 pb-1'>
              <NavLink to={"/create-project"}>
                <img src={pathname==="/create-project" ? createProjectActive : createProject} alt='Create Project' width={"25 px"} style={{cursor: "pointer"}}/>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="logout">
          <img src={logout} alt='Logout' style={{cursor: "pointer"}} onClick={handleLogoutFun}/>
        </div>
      </div>
  )
}

export default Sidebar