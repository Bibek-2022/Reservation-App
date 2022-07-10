import User from "../models/User.js";
import bcrypt from "bcryptjs";
export const register = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(201).send("User is created");
  } catch (error) {
    next(error);
  }
};
