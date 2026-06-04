import express from "express";
import contactController from "../Controller/ContactControler.js";
const route = express.Router();

route.post("/form", contactController);

export default route;
