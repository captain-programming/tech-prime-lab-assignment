const { Router } = require("express");
const { projectCreate, allProject, getCount } = require("../controller/projects.controller");

const projectsRoutes = Router();

projectsRoutes.post("/create", projectCreate);
projectsRoutes.post("/all-project", allProject);
projectsRoutes.post("/counter", getCount);

module.exports = projectsRoutes;