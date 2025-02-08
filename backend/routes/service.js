const express = require("express");
const Service = require("../models/Service");
const router = express.Router();

router.get("/", async (req, res) => res.json(await Service.find()));
router.post("/", async (req, res) => res.json(await Service.create(req.body)));

module.exports = router;
