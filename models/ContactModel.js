import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema({
  username: String,
  email: {
    type: String,
    required: true,
  },
  message: String,
});

export const contactModel = mongoose.model("Contact", contactSchema);
