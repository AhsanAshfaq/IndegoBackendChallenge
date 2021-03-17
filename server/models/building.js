"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var buildingSchema = new mongoose_1.Schema({
    id: {
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
}, { timestamps: true });
exports.default = mongoose_1.model("building", buildingSchema);
