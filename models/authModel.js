import mongoose, { SchemaType } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: String,
    postId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    email: {
      type: String,
      unique: true,
      required: true,
    },
    profileImg: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    password: String,
  },

  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
