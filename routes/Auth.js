import express from "express";
import {
  LoignController,
  signUpController,
} from "../controllers/authControllers.js";
import upload from "../imageUpload.js";
const route = express.Router();

route.post("/signup", upload.single("pfImage"), signUpController);
route.post("/login", LoignController);

export default route;
