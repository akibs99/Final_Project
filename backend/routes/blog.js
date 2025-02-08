const express = require("express");
const Blog = require("../models/Blog");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", async (req, res) => res.json(await Blog.find()));
router.post("/", authMiddleware, async (req, res) => res.json(await Blog.create(req.body)));

module.exports = router;
