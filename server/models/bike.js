"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bikeSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    dockNumebr: {
        type: String,
        required: true,
    },
    isElectric: {
        type: String,
        required: true,
    },
    isAvailable: {
        type: String,
        required: true,
    },
    battery: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.default = mongoose_1.model("bike", bikeSchema);
