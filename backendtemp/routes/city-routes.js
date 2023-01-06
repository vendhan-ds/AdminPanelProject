const express = require("express");
const router = express.Router();

const citiesController = require("../controllers/city-controller.js");
router.get("/", citiesController.getAllCities);
router.post("/update/", citiesController.updateCity);
router.post("/", citiesController.addNewCity);

router.get("/:id", citiesController.getCityById);

router.delete("/:id", citiesController.deleteCity);
router.get("/aa/:cityName", citiesController.getCityByName);
module.exports = router;