import React from 'react'

const ProjectTable = ({allProject}) => {
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
              <tr>
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
                    <button style={{backgroundColor: "rgb(2,91,170)", color: "white", padding: "4px 20px", borderRadius: "20px", fontWeight: "500", border: "1px solid #025BAA"}}>Start</button>
                    <button style={{backgroundColor: "white", color: "#025BAA", padding: "4px 20px", borderRadius: "20px", fontWeight: "500", border: "1px solid #025BAA"}}>Close</button>
                    <button style={{backgroundColor: "white", color: "#025BAA", padding: "4px 20px", borderRadius: "20px", fontWeight: "500", border: "1px solid #025BAA"}}>Cancel</button>
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