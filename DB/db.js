import mongoose from "mongoose";

const connectDb = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL);

    } catch (err) {
        console.log("mongooseErr", err)
    }
}

export default connectDb;