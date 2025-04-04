const express = require("express");
const {
  getProfile,
  getSkills,
  getExperience,
  getProjects
} = require("../controllers/profileController");

const router = express.Router();

router.get("/profile", getProfile);
router.get("/skills", getSkills);
router.get("/experience", getExperience);
router.get("/projects", getProjects);

module.exports = router;
