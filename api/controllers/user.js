import User from "../models/User.js";
// update
export const updateUser = async (res, req, next) => {
  const updatedUser = new User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(200).json(updatedUser);
  try {
    const savedUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    next(error);
  }
};
// delete
export const deleteUser = async (res, req, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User is deleted");
  } catch (error) {
    next(error);
  }
};

export const getUser = async (res, req, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (res, req, next) => {
  try {
    const users = await User.find(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
