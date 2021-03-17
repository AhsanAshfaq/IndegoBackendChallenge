import { Router } from "express";
import { getBikes, addBike } from "../services/bike.service";
import { getBuildings, addBuilding, getBuilding } from "../services/building.service";
import jwt from "jsonwebtoken";
import config from "../config/config";
import { app } from "../../app";
//import { startJob, stopJob } from "../services/job.service";

const ProtectedRoutes: Router = Router();

ProtectedRoutes.use((req, res, next) =>{
    var token = req.headers['access-token'];
    // decode token
    if (token) {
      // verifies secret and checks if the token is expired
      jwt.verify(token.toString(), app.get('Secret'), (err:any, decoded:any) =>{      
        if (err) {
          return res.json({ message: 'invalid token' });    
        } else {
          // if everything is good, save to request for use in other routes
          //req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          message: 'No token provided.' 
      });
    }
});
  
ProtectedRoutes.get("/bikes", getBikes);
ProtectedRoutes.post("/add-bike", addBike);

ProtectedRoutes.get("/stations", getBuildings);
ProtectedRoutes.get("/stations/:kioskId", getBuilding);
ProtectedRoutes.post("/add-building", addBuilding);


// router.get("/stop-job/:name", stopJob);
// router.get("/start-job/:name", startJob);

export default ProtectedRoutes;