import { IBike} from "../interfaces/bike"
import { model, Schema } from "mongoose"

const bikeSchema: Schema = new Schema(
  {
    dockNumber: {
      type: String
    },
    isElectric: {
        type: String,
    },
    isAvailable: {
        type: String,
    },
    battery: {
        type: String,
      },
      buildingId: {
        type: Schema.Types.ObjectId,
        ref: 'Building'
      },
  },
  { timestamps: true }
)

export default model<IBike>("bike", bikeSchema, "bike")