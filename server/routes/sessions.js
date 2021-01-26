import { Router } from "express";
import {
  getSessions,
  createSession,
  getSession,
  deleteSession,
  updateSession,
} from "../controllers/sessions.js";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", auth, getSessions);
router.post("/", auth, createSession);
router.get("/:id", auth, getSession);
router.delete("/:id", auth, deleteSession);
router.patch("/:id", auth, updateSession);

export default router;
