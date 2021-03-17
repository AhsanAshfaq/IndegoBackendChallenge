import { IBuilding } from "../interfaces/building"
import { model, Schema } from "mongoose"
import  Bike from "../models/bike"

const buildingSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    totalDocks: {
      type: Number,
      required: true,
    },
    docksAvailable: {
      type: Number,
      required: true,
    },
    bikesAvailable: {
      type: Number,
      required: true,
    },
    classicBikesAvailable: {
      type: Number,
      required: true,
    },
    smartBikesAvailable: {
      type: Number,
      required: true,
    },
    electricBikesAvailable: {
      type: Number,
      required: true,
    },
    rewardBikesAvailable: {
      type: Number,
      required: true,
    },
    rewardDocksAvailable: {
      type: Number,
      required: true,
    },
    kioskStatus: {
      type: String,
      required: true,
    },
    kioskPublicStatus: {
      type: String,
      required: true,
    },
    kioskConnectionStatus: {
      type: String,
      required: true,
    },
    kioskType: {
      type: Number,
      required: true,
    },
    addressStreet: {
      type: String,
      required: true,
    },
    addressCity: {
      type: String,
      required: true,
    },
    addressState: {
      type: String,
      required: true,
    },
    addressZipCode: {
      type: String,
      required: true,
    },
    closeTime: {
      type: Date,
      required: false,
    },
    eventEnd: {
      type: Date,
      required: false,
    },
    eventStart: {
      type: Date,
      required: false,
    },
    isEventBased: {
      type: Boolean,
      required: false,
    },
    isVirtual: {
      type: Boolean,
      required: false,
    },
    kioskId: {
      type: Number,
      required: true,
    },
    notes: {
      type: String,
      required: false,
    },
    openTime: {
      type: Date,
      required: false,
    },
    publicText: {
      type: String,
      required: false,
    },
    timeZone: {
      type: String,
      required: false,
    },
    trikesAvailable: {
      type: Number,
      required: false,
    },
    latitude: {
      type: Number,
      required: false,
    },
    longitude: {
      type: Number,
      required: false,
    },
    coordinates: {
      type: [Number], 
      default: [0, 0]
    },
    weather : {
      type: String,
      required : false
    },
    bikes: {
      type : Array
    },
  },
  { timestamps: true }
)

export default model<IBuilding>("building", buildingSchema, "building")