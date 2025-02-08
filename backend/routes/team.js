const express = require("express");
const Team = require("../models/Team");
const router = express.Router();

router.get("/", async (req, res) => res.json(await Team.find()));
router.post("/", async (req, res) => res.json(await Team.create(req.body)));

module.exports = router;
