import mongoose from "mongoose";
// const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: String,
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    likeCount: {
      type: Number,
      default: 0,
    },
    tags: [],
    image: String,
  },
  { timestamps: true },
);

const PostModel = mongoose.model("Post", PostSchema);
export { PostModel };
