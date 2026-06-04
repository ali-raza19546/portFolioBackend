import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./Db/db.js";
import contactRoute from "./routes/authRoute.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use("/contact", contactRoute);

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "something went wrong!" } = err;

  res.status(Number(statusCode)).json({
    success: false,
    message,
  });
});
let isConnected = false;
connectDb()
  .then(() => {
    console.log("DB Connected!");
    isConnected = true;
  })
  .catch((err) => {
    console.log("DB Connection Failed!", err);
  });

app.use((req, res, next) => {
  if (!isConnected) {
    connectDb();
  }
  next();
});

export default app;
