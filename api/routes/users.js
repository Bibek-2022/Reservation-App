import express from "express";

const router = express.Router();

// UPDATE
router.put("/:id", updateUser);
// DELETE
router.delete("/:id", deleteUser);
// GET
router.get("/:id", getUser);
// ALL
router.get("/", getUsers);
export default router;
