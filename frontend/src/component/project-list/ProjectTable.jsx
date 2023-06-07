import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

const ProjectTable = ({allProject, setEditWork}) => {
  const editProject = async(text, id) => {
    try{
      let res = await axios.patch(`http://localhost:8080/project/update/${id}`, {status: text});
      toast.success(res?.data?.message || 'Valid User', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
      });
      setEditWork(Math.random(2))
    }catch(err){
      console.log(err)
      toast.error(err?.response?.data?.message || 'Invalid User', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
      });
    }
  }

  return (
    <div style={{paddingLeft: "25px", paddingRight: "25px"}}>
      <table width={"100%"} className='table'>
        <thead>
          <tr className='table-primary'>
            <th>Project Name</th>
            <th>Reason</th>
            <th>Type</th>
            <th>Division</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Dept.</th>
            <th>Location</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            allProject?.map((project) => (
              <tr key={project._id}>
                <td>
                  <h3 style={{fontSize: "20px"}}>{project?.projectName}</h3>
                  <p>{project?.startDate} to {project?.endDate}</p>
                </td>
                <td>{project?.reason}</td>
                <td>{project?.type}</td>
                <td>{project?.division}</td>
                <td>{project?.category}</td>
                <td>{project?.priority}</td>
                <td>{project?.department}</td>
                <td>{project?.location}</td>
                <td style={{fontWeight: "bold"}}>{project?.status}</td>
                <td>
                  <div className='d-flex gap-3'>
                    <button style={{backgroundColor: "rgb(2,91,170)", color: "white", padding: "4px 20px", borderRadius: "20px", fontWeight: "500", border: "1px solid #025BAA"}} onClick={()=>editProject("Running", project._id)}>Start</button>
                    <button style={{backgroundColor: "white", color: "#025BAA", padding: "4px 20px", borderRadius: "20px", fontWeight: "500", border: "1px solid #025BAA"}} onClick={()=>editProject("Closed", project._id)}>Close</button>
                    <button style={{backgroundColor: "white", color: "#025BAA", padding: "4px 20px", borderRadius: "20px", fontWeight: "500", border: "1px solid #025BAA"}} onClick={()=>editProject("Cancelled", project._id)}>Cancel</button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProjectTable