import { Document } from "mongoose"

export interface IBike extends Document {
  dockNumber: number,
  isElectric: boolean,
  isAvailable: boolean,
  battery : number
}