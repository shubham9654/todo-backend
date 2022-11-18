import { Document } from "mongoose";

export interface ITodo extends Document {
  name: string,
  description: string,
  status: boolean
}
export interface IResTodo extends Document {
  _id: string,
  name: string,
  description: string,
  status: boolean
}