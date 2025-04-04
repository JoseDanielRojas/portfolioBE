const fs = require("fs");
const path = require("path");

const readJSON = (fileName) => {
  const filePath = path.join(__dirname, "..", "data", fileName);
  return JSON.parse(fs.readFileSync(filePath));
};

const getProfile = (req, res) => res.json(readJSON("profile.json"));
const getSkills = (req, res) => res.json(readJSON("skills.json"));
const getExperience = (req, res) => res.json(readJSON("experience.json"));
const getProjects = (req, res) => res.json(readJSON("projects.json"));

module.exports = {
  getProfile,
  getSkills,
  getExperience,
  getProjects
};
