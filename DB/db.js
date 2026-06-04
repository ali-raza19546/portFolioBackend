import { ExpressErr } from "../utils/ExpressErr.js";
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (err) {
    console.log("fail connections",err)
  }
};

export default connectDb;
