const express = require("express");
const aboutCtrl = require("../Controllers/about");
const router = express.Router();

router.get("/", aboutCtrl.index);

module.exports = router;
