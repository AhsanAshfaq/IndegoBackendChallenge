import { IBuilding} from "../interfaces/building"
import Building from "../models/building"
import { IBike } from "../interfaces/bike"
import Bike from "../models/bike"
import axios from 'axios'
import config from "../config/config";
import * as schedule from "node-schedule";

let weatherReport = "";

export async function execute() {
  schedule.scheduleJob(config.app.jobInterval, async function () {
    console.log("Job running");
    axios.get(config.app.weatherApiUrl)
    .then((response) => {
        weatherReport = `The weather at ${new Date().toLocaleString()} in Philadelphia is about ${Math.ceil((response.data.main.temp - 273.15))} degree centigrades.`;
        console.log("weather done");
    }).catch(function (error) {
        console.error(error); throw error;
    });

    axios.get(config.app.bikeServiceUrl)
    .then(function (response) {
        response.data.features.forEach( (feature:any) => {
          var property = feature.properties;
          const building: IBuilding = new Building({
            name : property.name,
            totalDocks : property.totalDocks,
            docksAvailable : property.docksAvailable,
            bikesAvailable : property.bikesAvailable,
            classicBikesAvailable : property.classicBikesAvailable,
            smartBikesAvailable : property.smartBikesAvailable,
            electricBikesAvailable : property.electricBikesAvailable,
            rewardBikesAvailable : property.rewardBikesAvailable,
            rewardDocksAvailable : property.rewardDocksAvailable,
            kioskStatus : property.kioskStatus,
            kioskPublicStatus : property.kioskPublicStatus,
            kioskConnectionStatus : property.kioskConnectionStatus,
            kioskType : property.kioskType,
            addressStreet : property.addressStreet,
            addressCity : property.addressCity,
            addressState : property.addressState,
            addressZipCode : property.addressZipCode,
            closeTime : property.closeTime,
            eventEnd : property.eventEnd,
            eventStart : property.eventStart,
            isEventBased : property.isEventBased,
            isVirtual : property.isVirtual,
            kioskId : property.kioskId,
            notes : property.notes,
            openTime : property.openTime,
            publicText : property.publicText,
            timeZone : property.timeZone,
            trikesAvailable : property.trikesAvailable,
            latitude : property.latitude,
            longitude : property.longitude,
            weather : weatherReport,
            coordinates : property.coordinates,
            bikes : feature.properties.bikes
          });

          building.save(function(err:any, doc) {
            if (err) return console.error(err);
            feature.properties.bikes.forEach((currentBike:any) => {
              const bike: IBike = new Bike({
                dockNumber : currentBike.dockNumber,
                isAvailable : currentBike.isAvailable,
                isElectric : currentBike.isElectric,
                battery : currentBike.battery,
                buildingId : doc._id
              });
              
              bike.save(function(err:any, doce) {
                if (err) return console.error(err);
                // Building.findByIdAndUpdate(doc._id,
                //   { "$push": { "bikes": doce._id } },
                //   { "new": true, "upsert": true },
                // (err) =>  {
                //       if (err) throw err;
                //       console.log("Building updates running");
                //   }
                // );
              });
            });
          });
      });
    })
    .catch(function (error) {
      console.error(error); throw error;
    });
  });
}