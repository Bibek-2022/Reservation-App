import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello user, you are in");
});

// UPDATE
router.put("/:id", updateUser);
// DELETE
router.delete("/:id", deleteUser);
// GET
router.get("/:id", getUser);
// ALL
router.get("/", getUsers);
export default router;
