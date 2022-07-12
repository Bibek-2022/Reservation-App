import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

// initial connection
const connect = () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("Connected to Mongo");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

// middlewares
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);

// error handling if we have error in any of the middleware
app.get("/", (err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 500;
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: er.stack,
  });
});

app.listen(8000, () => {
  connect();
  console.log("Connected to backend");
});
