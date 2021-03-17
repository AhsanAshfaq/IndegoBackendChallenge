import express, { Response, Request } from "express"
import  mongoose from "mongoose"
import { IBike} from "../interfaces/bike"
import Bike from "../models/bike"


const bikeRoute = express.Router();

const getBikes = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: IBike[] = await Bike.find()
    res.status(200).json({ todos })
  } catch (error) {
    throw error
  }
}

const addBike = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body;
      const bike: IBike = new Bike({
        dockNumber: body.dockNumber,
        isElectric: body.isElectric,
        isAvailable: body.isAvailable,
        battery: body.battery
      });
      
      await bike.save().then((result) =>{
        res.status(201)
        .json({ message: "Bike added", bike: result})
      });
    } catch (error) {
      console.log('err');
      throw error
    }
  }

  export { getBikes, addBike}