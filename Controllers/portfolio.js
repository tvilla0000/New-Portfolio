const project = require("../models/project");

module.exports = {
  index
};

function index(req, res) {
  res.render("portfolio", {
    projects: project.getAll(),
    frontendProjects: project.getAllFrontend(),
    backendProjects: project.getAllBackend(),
    fullstackProjects: project.getAllFullstack()
  });
}
