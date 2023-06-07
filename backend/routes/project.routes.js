const { Router } = require("express");
const { projectCreate, allProject, getCount, projectUpdate } = require("../controller/projects.controller");

const projectsRoutes = Router();

projectsRoutes.post("/create", projectCreate);
projectsRoutes.post("/all-project", allProject);
projectsRoutes.post("/counter", getCount);
projectsRoutes.patch("/update/:id", projectUpdate);

module.exports = projectsRoutes;