import { Router } from "express";
import { updateProfile, getProfile } from "../controllers/profile.js";
import auth from "../middleware/auth.js";

const router = Router();

router.patch("/update", auth, updateProfile);
router.get("/", auth, getProfile);

export default router;
