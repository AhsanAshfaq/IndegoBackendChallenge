import { Router } from "express";
import { getBikes, addBike } from "../services/bike.service";
import { getBuildings, addBuilding, getBuilding } from "../services/building.service";
import jwt from "jsonwebtoken";
import config from "../config/config";
import { app } from "../../app";
//import { startJob, stopJob } from "../services/job.service";

const ProtectedRoutes: Router = Router();
  
ProtectedRoutes.get("/bikes", getBikes);
ProtectedRoutes.post("/add-bike", addBike);

ProtectedRoutes.get("/stations", getBuildings);
ProtectedRoutes.get("/stations/:kioskId", getBuilding);
ProtectedRoutes.post("/add-building", addBuilding);


// router.get("/stop-job/:name", stopJob);
// router.get("/start-job/:name", startJob);

export default ProtectedRoutes;