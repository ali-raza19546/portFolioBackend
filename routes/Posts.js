import express from "express";
import multer from "multer";
import {
  addPost,
  distroyPost,
  // distroyPost,
  getPosts,
} from "../controllers/PostController.js";
import { isToken } from "../middleware/tokenVerify.js";
import upload from "../imageUpload.js";
import { ExpressErr } from "../utils/ExpressErr.js";
import { postLikes } from "../controllers/Likepost.js";
const route = express.Router();
// import { storage } from "../Cloudinary.js";   image uploadin in cloud
// const upload = multer({ storage });

route.get("/allPosts", getPosts);
route.post("/addPost", isToken, upload.single("image"), addPost);
route.delete("/delete/:id", isToken, distroyPost);
route.post("/:postId/like", isToken, postLikes);
// route.delete("/delete", distroyPost);

export default route;
