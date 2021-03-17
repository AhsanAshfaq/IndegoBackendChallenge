"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bike_service_1 = require("../services/bike.service");
var router = express_1.Router();
router.get("/bikes", bike_service_1.getBikes);
router.post("/add-bike", bike_service_1.addBike);
exports.default = router;
