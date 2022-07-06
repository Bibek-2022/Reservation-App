import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();
// CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
// UPDATE
// DELETE
// GET
// ALL
export default router;
