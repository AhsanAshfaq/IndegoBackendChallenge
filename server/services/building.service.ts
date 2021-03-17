import express, { Response, Request } from "express"
import { IBuilding} from "../interfaces/building"
import Building from "../models/building"
import moment from "moment";


const getBuildings = async (req: Request, res: Response) => {
  try {
    let queryStringDate;
    try { 
      queryStringDate = moment(req.query.at?.toString()).format('YYYY-MM-DDTHH:mm:ss');
    } catch (err) {
      if (err)  res.json({statusCode : 500 , error: err.value});
    }
    const buildings: IBuilding[] = await Building.find({
      createdAt: {
        $gte: queryStringDate,
      }
    }).sort({ _id: -1 });
    res.json({at : queryStringDate, stations : buildings , weather : buildings[0].weather}).status(200);
  } catch (error) {
    throw error
  }
}

const getBuilding = async (req: Request, res: Response) => {
  try {

    let kioskId = parseInt(req.params.kioskId);  
    let queryStringDate;
    try {
      queryStringDate = moment(req.query.at?.toString()).format('YYYY-MM-DDTHH:mm:ss');
    } catch (err) {
      if (err)  res.json({statusCode : 500 , error: err.value});
    }
     
    const building: IBuilding[] = await Building.find({
      kioskId : kioskId,
      createdAt: {
        $gte: queryStringDate,
      } 
    }).sort({ _id: -1 }).limit(1);
    let weather ='';
    if(building[0] !== undefined) {weather = building[0].weather;}
    res.status(200).json({at : queryStringDate, station : building , weather : weather });
  } catch (error) {
    if (error)  return res.json({statusCode : 500 , error: error.value});
  }
}
const addBuilding = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body;
      const building: IBuilding = new Building({
        totalDocks : body.totalDocks,
        docksAvailable : body.docksAvailable,
        bikesAvailable : body.bikesAvailable,
        classicBikesAvailable : body.classicBikesAvailable,
        smartBikesAvailable : body.smartBikesAvailable,
        electricBikesAvailable : body.electricBikesAvailable,
        rewardBikesAvailable : body.rewardBikesAvailable,
        rewardDocksAvailable : body.rewardDocksAvailable,
        kioskStatus : body.kioskStatus,
        kioskPublicStatus : body.kioskPublicStatus,
        kioskConnectionStatus : body.kioskConnectionStatus,
        kioskType : body.kioskType,
        addressStreet : body.addressStreet,
        addressCity : body.addressCity,
        addressState : body.addressState,
        addressZipCode : body.addressZipCode,
        closeTime : body.closeTime,
        eventEnd : body.eventEnd,
        eventStart : body.eventStart,
        isEventBased : body.isEventBased,
        isVirtual : body.isVirtual,
        kioskId : body.kioskId,
        notes : body.notes,
        openTime : body.openTime,
        publicText : body.publicText,
        timeZone : body.timeZone,
        trikesAvailable : body.trikesAvailable,
        latitude : body.latitude,
        longitude : body.longitude,
      });
      await building.save().then((result) =>{
        res.status(201)
        .json({ message: "Building added", bike: result})
      });
    } catch (error) {
      console.log('err');
      throw error
    }
  }

  export { getBuildings, getBuilding, addBuilding}