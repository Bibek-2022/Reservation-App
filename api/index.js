import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
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
app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomRoute);

app.get("/", (req, res) => {
  res.send("Hello ");
});
app.listen(8000, () => {
  connect();
  console.log("Connected to backedn");
});
