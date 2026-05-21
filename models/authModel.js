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
        "https://www.gstatic.com/images/branding/product/1/avatar_circle_blue_512dp.png",
      set: (v) =>
        v === ""
          ? "https://www.gstatic.com/images/branding/product/1/avatar_circle_blue_512dp.png"
          : v,
    },
    password: String,
  },

  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
