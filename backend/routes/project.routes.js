const { Router } = require("express");
const { projectCreate, allProject, getCount, projectUpdate, projectDepartmentWiseData } = require("../controller/projects.controller");

const projectsRoutes = Router();

projectsRoutes.post("/create", projectCreate);
projectsRoutes.get("/all-project", allProject);
projectsRoutes.get("/counter", getCount);
projectsRoutes.patch("/update/:id", projectUpdate);
projectsRoutes.get("/department-data", projectDepartmentWiseData);

module.exports = projectsRoutes;