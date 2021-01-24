import { Router } from "express";
import {
  getSessions,
  createSession,
  getSession,
  deleteSession,
  updateSession,
} from "../controllers/sessions.js";

const router = Router();

router.get("/", getSessions);
router.post("/", createSession);
router.get("/:id", getSession);
router.delete("/:id", deleteSession);
router.patch("/:id", updateSession);

export default router;
