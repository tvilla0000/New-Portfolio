const express = require("express");
const homeCtrl = require("../Controllers/home");
const router = express.Router();

router.get("/", homeCtrl.index);

module.exports = router;
