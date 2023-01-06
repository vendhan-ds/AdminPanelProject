const express = require("express");

const router = express.Router();
const experienceController = require("../controllers/experience-controller.js");
router.get("/", experienceController.getAllExperience);
router.post("/update/", experienceController.updateExperience);
router.post("/",experienceController.addNewExperience);

router.get("/:id", experienceController.getExperienceById);
router.get("/aa/:experienceName", experienceController.getExperienceByName);
router.delete("/:id", experienceController.deleteExperience);
router.get("/bb/:cityName", experienceController.getExperienceByCityName);
module.exports = router;