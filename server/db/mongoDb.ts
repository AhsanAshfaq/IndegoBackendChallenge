import config  from '../config/config';
import mongoose from "mongoose"

export default async function connection() {
    try {
        mongoose.set("useFindAndModify", false);
        mongoose.connect(
         config.db.dbUri,
         { useNewUrlParser: true, useUnifiedTopology: true },
         () => console.log("Mongoose is connected")
       );
     } catch (e) {
       console.log(`could not connect with Error : ${e}`);
     }
};