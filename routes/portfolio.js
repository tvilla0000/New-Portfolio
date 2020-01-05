const express = require("express");
const portCtrl = require("../Controllers/portfolio");
const router = express.Router();

router.get("/", portCtrl.index);

module.exports = router;
