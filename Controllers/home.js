const project = require("../models/project");

module.exports = {
  index
};

function index(req, res) {
  res.render("home", {
    projects: project.getRecent()
  });
}
