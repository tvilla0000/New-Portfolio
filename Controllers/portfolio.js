const project = require("../models/project");

module.exports = {
  index
};

function index(req, res) {
  res.render("portfolio", {
    projects: project.getAll()
  });
}
